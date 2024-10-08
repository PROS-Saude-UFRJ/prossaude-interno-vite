import { ErrorBoundary } from "react-error-boundary";
import { HistoricDlgProps } from "../../src/lib/global/declarations/interfacesCons";
import { elementNotFound, extLine } from "../../src/lib/global/handlers/errorHandler";
import { isClickOutside } from "../../src/lib/global/gStyleScript";
import { nullishDlg, nullishTab } from "../../src/lib/global/declarations/types";
import { syncAriaStates } from "../../src/lib/global/handlers/gHandlers";
import { useEffect, useRef } from "react";
import ErrorFallbackDlg from "../error/ErrorFallbackDlg";
import GenericErrorComponent from "../error/GenericErrorComponent";
import PrevConsRow from "./PrevConsRow";
import { Link, useNavigate } from "react-router-dom";
export default function PrevConsList({
  dispatch,
  state = true,
  name = "Anônimo",
  historic = [
    {
      type: "avaliacao",
      day: "0000-00-00",
      prof: "Anônimo",
      stud: "Anônimo",
      notes: "",
    },
  ],
}: HistoricDlgProps): JSX.Element {
  const prevConsDlgRef = useRef<nullishDlg>(null),
    prevConsTabRef = useRef<nullishTab>(null),
    navigate = useNavigate();
  //push em history
  useEffect(() => {
    const encodedName = btoa(
      String.fromCodePoint(...new TextEncoder().encode(name.toLowerCase().replaceAll(" ", "-"))),
    );
    navigate({
      pathname: location.pathname,
      search: `${location.search}&prev-cons=open`,
      hash: `#${encodedName}`,
    });
    return (): void => {
      const currentParams = new URLSearchParams(location.search);
      currentParams.delete("prev-cons");
      navigate(
        {
          pathname: location.pathname,
          search: currentParams.toString(),
          hash: "",
        },
        { replace: true },
      );
    };
  }, [name, location, navigate]);
  useEffect(() => {
    if (prevConsDlgRef.current instanceof HTMLDialogElement) {
      prevConsDlgRef.current.showModal();
      syncAriaStates([...prevConsDlgRef.current!.querySelectorAll("*"), prevConsDlgRef.current]);
    } else
      elementNotFound(prevConsDlgRef.current, "Reference for Previous appointments list dialog", extLine(new Error()));
  }, [prevConsDlgRef]);
  const togglePrevConsDisplay = (state: boolean = true): void => dispatch(!state);
  return (
    <ErrorBoundary FallbackComponent={() => <GenericErrorComponent message='Erro carregando modal' />}>
      <dialog
        className='modal-content-stk2'
        ref={prevConsDlgRef}
        id={`prev-cons-${name.toLowerCase().replaceAll(" ", "-")}`}
        onClick={ev => {
          if (isClickOutside(ev, ev.currentTarget).some(coord => coord === true)) {
            ev.currentTarget.close();
            dispatch(!state);
          }
        }}>
        <ErrorBoundary
          FallbackComponent={() => (
            <ErrorFallbackDlg
              renderError={new Error(`Erro carregando a janela modal!`)}
              onClick={() => togglePrevConsDisplay(state)}
            />
          )}>
          <section className='flexRNoWBetCt widFull' id='headPrevConsList'>
            <h2 className='mg-1b'>
              <strong>Consultas Anteriores</strong>
            </h2>
            <button className='btn btn-close forceInvert' onClick={() => togglePrevConsDisplay(state)}></button>
          </section>
          <section className='form-padded' id='sectPacsTab'>
            <table
              className='table table-striped table-responsive table-hover tabPacs'
              id='avPacsTab'
              ref={prevConsTabRef}>
              <caption className='caption-t'>
                <strong>
                  <small role='textbox'>
                    <em className='noInvert'>
                      Lista Recuperada da Ficha de Pacientes registrados. Acesse
                      <samp>
                        <Link to={`${location.origin}/ag`} id='agLink' style={{ display: "inline" }}>
                          &nbsp;Anamnese Geral&nbsp;
                        </Link>
                      </samp>
                      para cadastrar
                    </em>
                  </small>
                </strong>
              </caption>
              <colgroup>
                {Array.from({ length: 5 }, (_, i) => (
                  <col key={`pac_col__${i}`} data-col={i + 1}></col>
                ))}
              </colgroup>
              <thead className='thead-dark'>
                <tr id='avPacs-row1' data-row={1}>
                  {[
                    "Nome",
                    "Data",
                    "Tipo de Consulta",
                    "Profissional Responsável",
                    "Estudante Alocado",
                    "Anotações",
                  ].map((l, i) => (
                    <th key={`pac_th__${i}`} scope='col' data-row={1} data-col={i + 1}>
                      {l}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {historic.map((iHist, i) => (
                  <PrevConsRow name={name} nRow={i + 2} historic={iHist} key={`i-hist__${i + 2}`} />
                ))}
              </tbody>
            </table>
          </section>
        </ErrorBoundary>
      </dialog>
    </ErrorBoundary>
  );
}
