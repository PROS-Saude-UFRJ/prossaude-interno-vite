import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FormDlg from "./FormDlg";
export default function BtnAddPac(): JSX.Element {
  const [pressState, setTogglePress] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const toggleForm = (): void => setTogglePress(prevState => !prevState);
  useEffect(() => {
    if (searchParams.get("new-cons") === "open") setTogglePress(true);
  }, [searchParams]);
  return (
    <>
      <button
        type='button'
        className='btn btn-success widFull900Q widQ460MinFull htMaxBSControl forceInvert bolded'
        id='addAppointBtn'
        onClick={toggleForm}
        title='Preencha um formulário para gerar a ficha de uma nova consulta'>
        Adicionar Consulta
      </button>
      {pressState ? <FormDlg onClose={toggleForm} /> : null}
    </>
  );
}
