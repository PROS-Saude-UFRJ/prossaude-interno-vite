import { useEffect } from "react";
import { redirect } from "react-router-dom";
export default function Guard(): JSX.Element {
  useEffect(() => {
    if (window) {
      if (!localStorage.getItem("user")) {
        alert("Por favor logue no sistema antes de prosseguir.");
        redirect("/login");
        return;
      }
      if (!localStorage.getItem("authorized") || localStorage.getItem("authorized") !== "true") {
        alert("Usuário não autorizado. Retornando à tela de login.");
        redirect("/login");
      }
    }
  }, []);
  return <></>;
}
