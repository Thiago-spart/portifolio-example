import { GlobalStyle } from "../styles/globals.ts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
