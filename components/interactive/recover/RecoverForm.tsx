import { handleEventReq, validateForm } from "../../../src/lib/global/handlers/gHandlers";
import { handleSubmit } from "../../../src/lib/locals/panelPage/handlers/handlers";
import { useState, useRef, useEffect } from "react";
import RecoverAlert from "../../alerts/RecoverAlert";
import { nullishForm } from "../../../src/lib/global/declarations/types";
import { assignFormAttrs } from "../../../src/lib/global/gModel";
import { Link } from "react-router-dom";
export default function RecoverForm(): JSX.Element {
  const formRef = useRef<nullishForm>(null),
    [shouldShowAlert, setAlert] = useState<boolean>(false);
  useEffect(() => assignFormAttrs(formRef.current));
  return (
    <form
      ref={formRef}
      id='recover-form'
      name='recover_form'
      method='post'
      action=''
      encType='application/x-www-form-urlencoded'
      //TODO TEM QUE ADICIONAR O ENDPOINT PRA ESSE FORM
      onSubmit={ev =>
        validateForm(ev).then(validation => {
          ev.preventDefault();
          validation[0] && handleSubmit("recover", validation[2], true);
        })
      }>
      <section id='recover-titles' className='recover-sect'>
        <h1>Recuperação de Senha</h1>
        <p>Forneça as informações solicitadas para prosseguir!</p>
      </section>
      <section id='recover-entries' className='recover-sect'>
        <fieldset id='recover-email__fs' className='recover-entries__fs'>
          <label htmlFor='recover-email__inp' id='recover-email__lab' className='form-label'>
            E-mail:
          </label>
          <input
            type='email'
            placeholder='Digite aqui o seu e-mail'
            id='recover-email__inp'
            className='form-control minText patternText'
            autoComplete='email'
            minLength={5}
            data-reqlength='5'
            data-pattern='@'
            data-flags='g'
            required
            onInput={ev => handleEventReq(ev.currentTarget)}
          />
        </fieldset>
      </section>
      <section id='recover-cta-sect' className='recover-sect'>
        <button
          type='submit'
          id='submit-recover'
          className='btn btn-info'
          //TODO PARA TESTE
          onClick={ev => {
            ev.preventDefault();
            setAlert(true);
          }}>
          Enviar
        </button>
        <button type='reset' id='login-return' className='btn btn-primary'>
          <a href='#' id='login-anchor'>
            <Link to='/login'>Retornar</Link>
          </a>
        </button>
      </section>
      <div id='modal-div'>{shouldShowAlert && <RecoverAlert dispatch={setAlert} state={shouldShowAlert} />}</div>
    </form>
  );
}
