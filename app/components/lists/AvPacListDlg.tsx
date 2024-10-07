import { ErrorBoundary } from "react-error-boundary";
import { AvPacListDlgProps } from "../../src/lib/global/declarations/interfacesCons";
import { elementNotFound, extLine } from "../../src/lib/global/handlers/errorHandler";
import { isClickOutside } from "../../src/lib/global/gStyleScript";
import { nullishDlg } from "../../src/lib/global/declarations/types";
import { syncAriaStates } from "../../src/lib/global/handlers/gHandlers";
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ErrorFallbackDlg from "../error/ErrorFallbackDlg";
import PacList from "./PacList";
export default function AvPacListDlg({ dispatch, state, shouldShowAlocBtn }: AvPacListDlgProps): JSX.Element {
  const [shouldDisplayRowData, setDisplayRowData] = useState<boolean>(false);
  const dialogRef = useRef<nullishDlg>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (searchParams.get("av-pac") !== "open") setSearchParams({ "av-pac": "open" });
    return (): void => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("av-pac");
      setSearchParams(newSearchParams);
    };
  }, [searchParams, setSearchParams]);

  //listeners for dialog
  useEffect(() => {
    if (dialogRef?.current instanceof HTMLDialogElement) {
      dialogRef.current.showModal();
      syncAriaStates([...dialogRef.current.querySelectorAll("*"), dialogRef.current]);
      const handleKeyDown = (press: KeyboardEvent): void => {
        if (press.key === "Escape") setDisplayRowData(shouldDisplayRowData => !shouldDisplayRowData);
      };
      addEventListener("keydown", handleKeyDown);
      return () => removeEventListener("keydown", handleKeyDown);
    } else {
      elementNotFound(dialogRef.current, "dialogElement in AvPacListDlg", extLine(new Error()));
    }
  }, [dialogRef]);
  return (
    <>
      {state && (
        <dialog
          className='modal-content-stk2'
          id='avPacListDlg'
          ref={dialogRef}
          onClick={ev => {
            if (isClickOutside(ev, ev.currentTarget).some(coord => coord === true)) {
              dispatch(!state);
              navigate("?", { replace: true });
            }
          }}>
          <ErrorBoundary
            FallbackComponent={() => (
              <ErrorFallbackDlg
                renderError={new Error(`Erro carregando a janela modal!`)}
                onClick={() => dispatch(state)}
              />
            )}>
            <section className='flexRNoWBetCt widFull' id='headPacList'>
              <h2 className='mg-1b noInvert'>
                <strong>Pacientes Cadastrados</strong>
              </h2>
              <button className='btn btn-close forceInvert' onClick={() => dispatch(!state)}></button>
            </section>
            <PacList
              setDisplayRowData={setDisplayRowData}
              shouldDisplayRowData={shouldDisplayRowData}
              shouldShowAlocBtn={shouldShowAlocBtn}
              dispatch={dispatch}
              state={state}
            />
          </ErrorBoundary>
        </dialog>
      )}
    </>
  );
}
