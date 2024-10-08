import { TabBtnProps } from "../../../../../src/lib/global/declarations/interfaces";
import { handleIndEv } from "../../../../../src/lib/locals/edFisNutPage/edFisNutHandler";
import { textTransformPascal } from "../../../../../src/lib/global/gModel";
export default function TabBtnInd({ nRow, nCol, lab }: TabBtnProps): JSX.Element {
  const pascalCtx = textTransformPascal(lab).replaceAll(" ", "_");
  return (
    <button
      type='button'
      id={`btn${pascalCtx}${nCol - 1}Cel${nRow}_${nCol}`}
      className={`btn btn-secondary tabBtn tabBtnProgCons tabBtnInd tabBtn${pascalCtx} tabBtnCol${nCol - 1}`}
      onClick={ev => handleIndEv(ev, "BTN")}
      data-row={nRow}
      data-col={nCol}>
      Calcular
    </button>
  );
}
