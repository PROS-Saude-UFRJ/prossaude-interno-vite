import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TipsBtn from "../def/TipsBtn";
import AGTips from "./AGTips";
export default function AgTipsBtnWrapper(): JSX.Element {
  const [shouldShowTips, setTips] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("tips") === "open") setTips(true);
  }, [searchParams]);
  return (
    <>
      <TipsBtn dispatch={setTips} state={shouldShowTips} />
      {shouldShowTips && <AGTips dispatch={setTips} state={shouldShowTips} />}
    </>
  );
}
