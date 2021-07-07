import { Provider } from "react-redux";
import Home from "./views/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "./theme/global";
import { THEME } from "./theme/variables";
import { ToastProvider } from "react-toast-notifications";

import store from "./store";
import Routes from "./routes";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <ToastProvider>
          <GlobalStyled />
          <Routes />
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  );
}
