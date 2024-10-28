import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TipsBtn from "../def/TipsBtn";
import ENTips from "./ENTips";
export default function ENTipsBtnWrapper(): JSX.Element {
  const [shouldShowTips, setTips] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("tips") === "open") setTips(true);
  }, [searchParams]);
  return (
    <>
      <TipsBtn dispatch={setTips} state={shouldShowTips} />
      {shouldShowTips && <ENTips state={shouldShowTips} dispatch={setTips} />}
    </>
  );
}
