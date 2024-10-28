import { ErrorBoundary } from "react-error-boundary";
import { syncAriaStates } from "../../../src/lib/global/handlers/gHandlers";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GenericErrorComponent from "../../error/GenericErrorComponent";
import PanelTips from "./PanelTips";
import TipsBtn from "../def/TipsBtn";
export default function TipsBtnWrapper(): JSX.Element {
  const [shouldShowTips, setTips] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    syncAriaStates(document.querySelectorAll("*"));
    if (searchParams.get("tips") === "open") setTips(true);
  }, [searchParams]);
  return (
    <ErrorBoundary FallbackComponent={() => <GenericErrorComponent message='Failed to Load Tips Btn' />}>
      <TipsBtn dispatch={setTips} state={shouldShowTips} />
      {shouldShowTips && <PanelTips state={shouldShowTips} dispatch={setTips} />}
    </ErrorBoundary>
  );
}
