import { Dispatch, lazy, SetStateAction, Suspense, useState } from "react";
import { createContext, useEffect } from "react";
import ReactSpinner from "../../../icons/ReactSpinner";
export const PanelCtx = createContext<{
  userClass: string;
  setUserClass: Dispatch<SetStateAction<string>>;
}>({
  userClass: "coordenador",
  setUserClass: () => {},
});
const SelectPanel = lazy(() => import("./SelectPanel"));
export default function SelectPanelLoader(): JSX.Element {
  //TODO ERRO NO DISPATCH
  const [userClass, setUserClass] = useState<string>("coordenador");
  useEffect(() => {
    const active = localStorage.getItem("activeUser");
    if (active) {
      const privilege = JSON.parse(active)?.loadedData?.privilege;
      if (privilege) setUserClass(privilege);
    }
  }, []);
  return (
    <PanelCtx.Provider value={{ userClass, setUserClass }}>
      <Suspense fallback={<ReactSpinner scale={0.7} />}>
        <SelectPanel defOp='agenda' />
      </Suspense>
    </PanelCtx.Provider>
  );
}
