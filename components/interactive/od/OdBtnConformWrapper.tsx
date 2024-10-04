import { ErrorBoundary } from "react-error-boundary";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BtnConform from "../def/BtnConform";
import GenericErrorComponent from "../../error/GenericErrorComponent";
import OdDeclaration from "./OdDeclaration";
export default function OdBtnConformWrapper(): JSX.Element {
  const [shouldShowDeclaration, setDeclaration] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("conform") === "open") setDeclaration(true);
  }, [searchParams]);
  return (
    <ErrorBoundary FallbackComponent={() => <GenericErrorComponent message='Error rendering Button for Agreement' />}>
      <BtnConform dispatch={setDeclaration} state={shouldShowDeclaration} />
      {shouldShowDeclaration && <OdDeclaration state={shouldShowDeclaration} dispatch={setDeclaration} />}
    </ErrorBoundary>
  );
}
