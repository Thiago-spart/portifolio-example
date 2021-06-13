import { Header } from "./components/Header";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";

import { GlobalStyle } from "../styles/globals.ts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
