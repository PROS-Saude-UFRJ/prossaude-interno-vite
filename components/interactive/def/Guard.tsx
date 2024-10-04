import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Guard(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
    if (window) {
      if (!localStorage.getItem("user")) {
        alert("Por favor logue no sistema antes de prosseguir.");
        navigate("/login");
        return;
      }
      if (!localStorage.getItem("authorized") || localStorage.getItem("authorized") !== "true") {
        alert("Usuário não autorizado. Retornando à tela de login.");
        navigate("/login");
      }
    }
  }, [navigate]);
  return <></>;
}
