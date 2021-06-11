import { Header } from "./components/Header";

import { GlobalStyle } from "../styles/globals.ts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
