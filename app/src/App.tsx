import { Context, createContext, lazy, Suspense } from "react";
import { RootCtxType } from "../src/lib/global/declarations/interfaces";
import { Provider } from "react-redux";
import "./styles/globals/gStyle.scss";
import "./styles/globals/reactSpinner.scss";
import "./styles/globals/loginPageStyle.scss";
import mainStore from "./redux/mainStore";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Spinner from "../components/icons/Spinner";
import PageNotFound from "./pages/404";
const AGPage = lazy(() => import("./pages/ag")),
  BasePage = lazy(() => import("./pages/base")),
  EdFisNutPage = lazy(() => import("./pages/edfis")),
  LoginPage = lazy(() => import("./pages/login")),
  OdPage = lazy(() => import("./pages/od")),
  PanelPage = lazy(() => import("./pages/panel")),
  RecoverPage = lazy(() => import("./pages/recover"));
export const RootCtx: Context<RootCtxType> = createContext<RootCtxType>({
  divModal: {
    current: null,
  },
  divModalSec: {
    current: null,
  },
  divModalTerc: {
    current: null,
  },
  roots: {
    mainRoot: null,
  },
});
export default function ProSaudeApp(): JSX.Element {
  return (
    <Provider store={mainStore}>
      <RootCtx.Provider
        value={{
          divModal: { current: null },
          divModalSec: { current: null },
          divModalTerc: { current: null },
          roots: {
            mainRoot: null,
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
      </RootCtx.Provider>
    </Provider>
  );
}
