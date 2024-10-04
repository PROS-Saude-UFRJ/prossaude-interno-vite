import { DlgProps } from "../../../src/lib/global/declarations/interfaces";
import { elementNotFound, extLine } from "../../../src/lib/global/handlers/errorHandler";
import { isClickOutside } from "../../../src/lib/global/gStyleScript";
import { nullishDlg } from "../../../src/lib/global/declarations/types";
import { useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams

export default function OdTips({ state, dispatch }: DlgProps): JSX.Element {
  const dlgRef = useRef<nullishDlg>(null),
    [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("tips", "open");
    setSearchParams(currentParams);
    return () => {
      const updatedParams = new URLSearchParams(searchParams);
      updatedParams.delete("tips");
      setSearchParams(updatedParams);
    };
  }, [setSearchParams, searchParams]);
  useEffect(() => {
    const handleEscape = (ev: KeyboardEvent): void => {
      if (ev.key === "Escape") {
        dispatch(!state);
        !state && dlgRef.current?.close();
      }
    };
    try {
      if (!(dlgRef.current instanceof HTMLDialogElement)) {
        throw elementNotFound(dlgRef.current, `${OdTips.prototype.constructor.name}`, extLine(new Error()));
      }
      dlgRef.current.showModal();
      addEventListener("keypress", handleEscape);
    } catch (e) {
      console.error(`Error executing useEffect for PanelTips:\n${(e as Error).message}`);
    }
    return () => removeEventListener("keypress", handleEscape);
  }, [dlgRef, dispatch, state]);
  return !state ? (
    <></>
  ) : (
    <dialog
      className='modal-content-fit defDp wid50v'
      id='tipsDlg'
      ref={dlgRef}
      onClick={ev => {
        if (isClickOutside(ev, ev.currentTarget).some(coord => coord === true)) {
          ev.currentTarget.close();
          dispatch(!state);
        }
      }}>
      <div className='flexNoW flexAlItCt flexJBt'>
        <h3 className='bolded'>Manual para controle de formulário</h3>
        <button
          className='btn btn-close forceInvert'
          id='tipsClose'
          onClick={ev => {
            dispatch(!state);
            !state && ev.currentTarget.closest("dialog")?.close();
          }}></button>
      </div>
      <hr />
      <article className='flexNoWC noInvert'>
        <section className='odTipsSect' id='fillTips'>
          <h4 className='bolded mg-2bv'>1. Controle de Entradas</h4>
          <div className='flexNoWC pdL1v'>
            <p className='dicas' id='dicaKb'>
              <strong>1.1.</strong>
              <em>
                Apertar Alt + Y para &quot;Sim&quot; ou Alt + N para &quot;Não&quot; no próximo campo após iniciar o
                foco com Tab para preencher automaticamente
              </em>
            </p>
            <p className='dicas' id='dicaUppercase'>
              <strong>1.2.</strong>
              <em>
                As primeiras letras, exceto conjunções, são capitalizadas automaticamente por padrão. Outras correções
                de campos complexos podem precisar de mais texto — Continue digitando!
              </em>
            </p>
          </div>
        </section>
      </article>
    </dialog>
  );
}
