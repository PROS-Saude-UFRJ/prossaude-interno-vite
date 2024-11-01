import { handleCondtReq } from "@/lib/global/handlers/gHandlers";
export default function TelCodeSec(): JSX.Element {
  return (
    <input
      type='number'
      name='country_code_sec'
      id='tel2CountryCodeId'
      className='form-control inpIdentif noInvert'
      min='1'
      max='999'
      autoComplete='tel-country-code'
      data-xls='Código de país secundário'
      data-title='cod_pais_sec'
      onInput={ev =>
        handleCondtReq(ev.currentTarget, {
          min: 1,
          max: 6,
          minNum: 1,
          maxNum: 999,
        })
      }
    />
  );
}
