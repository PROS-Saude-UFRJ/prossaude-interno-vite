import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ReactSpinner from "../components/icons/ReactSpinner";
console.log("Starting react...");
const root = document.getElementById("root");
(() => {
  if (!root) {
    console.error(`No root was found in the DOM. React could not render.`);
    if (!document.body) {
      console.error(`No body element was found by React. Could not render anything.`);
      createRoot(document.body).render(
        <StrictMode>
          <main style={{ marginInline: "5%", marginBlock: "0", padding: "5%" }}>
            <h1>Erro crítico! 😨</h1>
            <h2>O Script não pôde renderizar a aplicação.</h2>
            <br />
            <h3>Recarregue ou contate o suporte!</h3>
            <ReactSpinner scale={0.8} />
          </main>
        </StrictMode>,
      );
    }
    return;
  }
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
})();
