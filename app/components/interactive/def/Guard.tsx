import { execLogout } from "@/lib/global/auth";
import { navigatorVars } from "@/vars";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Guard(): JSX.Element {
  const navigate = useNavigate(),
    errorToasted = useRef<boolean>(false),
    testToasted = useRef<boolean>(false);
  useEffect(() => {
    if (window) {
      if (!localStorage.getItem("user")) {
        if (!errorToasted.current) {
          toast.error(
            navigatorVars.pt ? "Por favor logue no sistema antes de prosseguir." : "Please login before proceeding.",
          );
          errorToasted.current = true;
          setTimeout(() => (errorToasted.current = false), 1000);
        }
        if (!testToasted.current) {
          toast(navigatorVars.pt ? "Usuário não encontrado!" : "User not found!", { icon: "⁉" });
          testToasted.current = true;
          setTimeout(() => (testToasted.current = false), 1000);
        }
        return;
      }
      if (!localStorage.getItem("timer")) {
        if (!localStorage.getItem("timer")) localStorage.setItem("timer", "6000");
        const timerCounter = setInterval(() => {
          const timer = localStorage.getItem("timer");
          if (timer) {
            const newTimer = parseInt(timer) - 1;
            localStorage.setItem("timer", newTimer.toString());
            if (newTimer <= 0) {
              toast("Timeout alcançado. Deslogando do sistema.", { icon: "⚠" });
              execLogout(navigate);
              clearInterval(timerCounter);
            }
          } else toast("Timeout alcançado. Deslogando do sistema.", { icon: "⚠" });
          execLogout(navigate);
          clearInterval(timerCounter);
        }, 1000);
      }
      setTimeout(() => {
        if (!localStorage.getItem("authorized") || localStorage.getItem("authorized") !== "true") {
          toast.error(
            navigatorVars.pt
              ? "Usuário não autorizado. Retornando à tela de login."
              : "User unauthorized. Returning to login page.",
          );
          if (!testToasted.current) {
            setTimeout(() => {
              toast(navigatorVars.pt ? "Usuário não autorizado!" : "User unauthorized!", { icon: "🚫" });
            }, 300);
            testToasted.current = true;
            setTimeout(() => (testToasted.current = false), 1000);
          }
          navigate("/login", { replace: true });
        }
      }, 1000);
    }
  }, [navigate]);
  return <></>;
}
