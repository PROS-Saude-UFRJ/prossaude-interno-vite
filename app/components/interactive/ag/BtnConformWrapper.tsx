import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AGDeclaration from "./AGDeclaration";
import BtnConform from "../def/BtnConform";
export default function BtnConformWrapper(): JSX.Element {
  const [shouldShowDeclaration, setDeclaration] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("conform") === "open") setDeclaration(true);
  }, [searchParams]);
  return (
    <>
      <BtnConform dispatch={setDeclaration} state={shouldShowDeclaration} />
      {shouldShowDeclaration && <AGDeclaration state={shouldShowDeclaration} dispatch={setDeclaration} />}
    </>
  );
}
