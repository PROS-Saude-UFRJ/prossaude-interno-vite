import { Context, createContext, lazy, Suspense } from "react";
import { AppRootContextType } from "../src/lib/global/declarations/interfaces";
import { Provider } from "react-redux";
import "./styles/globals/gStyle.scss";
import "./styles/locals/loginPageStyle.scss";
import "./styles/locals/basePageStyle.scss";
import "./styles/locals/aGPageStyle.scss";
import "./styles/locals/edFisNutPageStyle.scss";
import "./styles/locals/odPageStyle.scss";
import "./styles/locals/panelPageStyle.scss";
import "./styles/locals/recoverPageStyle.scss";
import mainStore from "./redux/mainStore";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Spinner from "../components/icons/Spinner";
import PageNotFound from "./pages/404";
const AGPage = lazy(() => import("./pages/ag"));
const BasePage = lazy(() => import("./pages/base"));
const EdFisNutPage = lazy(() => import("./pages/edfis"));
const LoginPage = lazy(() => import("./pages/login"));
const OdPage = lazy(() => import("./pages/od"));
const PanelPage = lazy(() => import("./pages/panel"));
const RecoverPage = lazy(() => import("./pages/recover"));
export const AppRootContext: Context<AppRootContextType> = createContext<AppRootContextType>({
  roots: {
    mainRoot: undefined,
  },
});
export default function ProSaudeApp(): JSX.Element {
  return (
    <Provider store={mainStore}>
      <AppRootContext.Provider
        value={{
          roots: {
            mainRoot: document.getElementById("root"),
          },
        }}>
        <Router>
          <Suspense fallback={<Spinner fs={true} />}>
            <Routes>
              <Route path='/' element={<Navigate to='/login' replace />} />
              <Route path='/login/*' caseSensitive={true} element={<LoginPage />} />
              <Route path='/recover/*' caseSensitive={true} element={<RecoverPage />} />
              <Route path='/base/*' caseSensitive={true} element={<BasePage />} />
              <Route path='/ag/*' caseSensitive={true} element={<AGPage />} />
              <Route path='/edfis/*' caseSensitive={true} element={<EdFisNutPage />} />
              <Route path='/od/*' caseSensitive={true} element={<OdPage />} />
              <Route path='/panel/*' caseSensitive={true} element={<PanelPage />} />
              <Route path='*' caseSensitive={false} element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </AppRootContext.Provider>
    </Provider>
  );
}
