import "../styles/globals.css";
import { useRef, useEffect } from "react";
//COMPONENTS
import Nav from "../Components/Nav";
import Design from "../Components/lookAndFeel/Design";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
//GLOBAL STYLES
import GlobalStyle from "../Components/lookAndFeel/GlobalStyle";
import { StyledCursor } from "../Components/lookAndFeel/ReusableStyles";
//FRamer motion
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const cursor = useRef();

  useEffect(() => {
    const listener = ({ clientX, clientY }) => {
      cursor.current.style.transform = `translate(${clientX - 25}px, ${
        clientY - 25
      }px)`;
    };
    window.addEventListener("mousemove", listener);

    return () => {
      window.removeEventListener("mousemove", listener);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <SEO page={router.asPath} />
      <StyledCursor ref={cursor} />
      <Nav />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Design />
      <Footer />
    </>
  );
}

export default MyApp;
