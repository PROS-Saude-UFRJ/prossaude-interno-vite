import { DlgProps } from "../../../src/lib/global/declarations/interfaces";
import { ErrorBoundary } from "react-error-boundary";
import { elementNotFound, extLine } from "../../../src/lib/global/handlers/errorHandler";
import { isClickOutside } from "../../../src/lib/global/gStyleScript";
import { nullishDlg } from "../../../src/lib/global/declarations/types";
import { syncAriaStates } from "../../../src/lib/global/handlers/gHandlers";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import GenericErrorComponent from "../../error/GenericErrorComponent";
import st from "../../../src/styles/locals/declarationStyles.module.scss";
import DefaultDeclaration from "../def/DefaultDeclaration";

export default function AGDeclaration({ state, dispatch }: DlgProps): JSX.Element {
  const mainRef = useRef<nullishDlg>(null),
    [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!searchParams.has("conform")) {
      searchParams.set("conform", "open");
      setSearchParams(searchParams);
    }
    return (): void => {
      searchParams.delete("conform");
      setSearchParams(searchParams);
    };
  }, [searchParams, setSearchParams]);
  useEffect(() => {
    const handleKeyPress = (kp: KeyboardEvent): void => {
      if (kp.key === "Escape") {
        dispatch(!state);
        !state && mainRef.current?.close();
      }
    };
    try {
      if (!(mainRef.current instanceof HTMLElement)) {
        throw elementNotFound(
          mainRef.current,
          `Main Reference for ${AGDeclaration.prototype.constructor.name}`,
          extLine(new Error()),
        );
      }
      syncAriaStates([mainRef.current, ...mainRef.current.querySelectorAll("*")]);
      mainRef.current instanceof HTMLDialogElement && mainRef.current.showModal();
      addEventListener("keypress", handleKeyPress);

      return (): void => removeEventListener("keypress", handleKeyPress);
    } catch (e) {
      console.error(`Error executing useEffect:\n${(e as Error).message}`);
    }
  }, [mainRef, dispatch, state]);
  return !state ? (
    <></>
  ) : (
    <ErrorBoundary FallbackComponent={() => <GenericErrorComponent message='Erro carregando modal de declaração' />}>
      <dialog
        id='conformDlg'
        className='modal-content-stk2 defDp'
        ref={mainRef}
        onClick={ev => {
          if (isClickOutside(ev, ev.currentTarget).some(coord => coord === true)) {
            dispatch(!state);
            !state && ev.currentTarget.close();
          }
        }}>
        <div className={st.declaracao}>
          <DefaultDeclaration />
          <p className={st.p}>
            <span className={`${st.span} ${st.num}`}>8. </span>
            <span className={st.strong}>
              Declaro estar ciente de que, de acordo com a regulamentação vigente para profissionais da saúde mental,{" "}
              <b>os dados deverão ser mantidos por um período mínimo de 20 anos</b> após o término do tratamento,
            </span>
            <span className={st.span}> em conformidade com as exigências do </span>
            <a href='https://portal.cfm.org.br/' target='_blank' rel='noopener noreferrer' className={st.a}>
              Conselho Federal de Medicina
            </a>
            <span className={st.span}>.</span>
          </p>
        </div>
      </dialog>
    </ErrorBoundary>
  );
}
