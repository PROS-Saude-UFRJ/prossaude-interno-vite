import { ErrorBoundary } from "react-error-boundary";
import { createRoot } from "react-dom/client";
import { elementNotFound, extLine } from "../../../src/lib/global/handlers/errorHandler";
import { useEffect, useContext } from "react";
import GenericErrorComponent from "../../error/GenericErrorComponent";
import UserProfilePanel from "../../user/UserProfilePanel";
import { AppRootContext } from "../../../src/App";
export default function UserProfilePanelWrapper(): JSX.Element {
  const context = useContext(AppRootContext);
  useEffect(() => {
    const profileSpan = document.getElementById("rootUserInfo");
    if (profileSpan instanceof HTMLElement) {
      if (!context.roots.userRoot) context.roots.userRoot = createRoot(profileSpan);
      if (!profileSpan.hasChildNodes()) context.roots.userRoot.render(<UserProfilePanel />);
      setTimeout(() => {
        if (!profileSpan.querySelector("img"))
          context.roots.userRoot.render(<GenericErrorComponent message='Erro renderizando painel de usuário' />);
      }, 2000);
    } else
      setTimeout(() => {
        !document.getElementById("rootUserInfo")?.querySelector("img") &&
          elementNotFound(profileSpan, "profileSpan during DOM initialization", extLine(new Error()));
      }, 2000);
  }, [context.roots]);
  return (
    <ErrorBoundary FallbackComponent={() => <GenericErrorComponent message='Error loading User Panel' />}>
      <UserProfilePanel />
    </ErrorBoundary>
  );
}
