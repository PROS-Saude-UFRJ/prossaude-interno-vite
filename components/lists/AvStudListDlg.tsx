import { AvStudListDlgProps } from "../../src/lib/locals/panelPage/declarations/interfacesCons";
import { ErrorBoundary } from "react-error-boundary";
import { elementNotFound, extLine } from "../../src/lib/global/handlers/errorHandler";
import { isClickOutside } from "../../src/lib/global/gStyleScript";
import { nullishDlg } from "../../src/lib/global/declarations/types";
import { syncAriaStates } from "../../src/lib/global/handlers/gHandlers";
import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ErrorFallbackDlg from "../error/ErrorFallbackDlg";
import StudList from "./StudList";
export default function AvStudListDlg({ forwardedRef, dispatch, state = false }: AvStudListDlgProps): JSX.Element {
  const dialogRef = useRef<nullishDlg>(null);
  const sectTabRef = useRef<HTMLElement | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (searchParams.get("av-stud") !== "open") {
      setSearchParams({ "av-stud": "open" });
    }
    return (): void => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("av-stud");
      setSearchParams(newSearchParams);
    };
  }, [searchParams, setSearchParams]);

  //listeners for dialog
  useEffect(() => {
    if (dialogRef?.current instanceof HTMLDialogElement) {
      dialogRef.current.showModal();
      syncAriaStates([...dialogRef.current.querySelectorAll("*"), dialogRef.current]);
      const handleKeyDown = (press: KeyboardEvent): void => {
        if (press.key === "Escape") dispatch(state);
      };
      addEventListener("keydown", handleKeyDown);
      return () => removeEventListener("keydown", handleKeyDown);
    } else {
      elementNotFound(dialogRef.current, "dialogElement in AvStudListDlg", extLine(new Error()));
    }
  }, [forwardedRef, dialogRef, dispatch]);

  return (
    <>
      {state && (
        <dialog
          className='modal-content-stk2'
          id='avStudListDlg'
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
                onClick={() => dispatch(!state)}
              />
            )}>
            <section className='flexRNoWBetCt' id='headStudList'>
              <h2 className='mg-1b noInvert'>
                <strong>Estudantes Cadastrados</strong>
              </h2>
              <button className='btn btn-close forceInvert' onClick={() => dispatch(!state)}></button>
            </section>
            <section className='form-padded' id='sectStudsTab' ref={sectTabRef}>
              <StudList mainDlgRef={forwardedRef} state={state} dispatch={dispatch} />
            </section>
          </ErrorBoundary>
        </dialog>
      )}
    </>
  );
}
