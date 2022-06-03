import "../styles/globals.css";
import { useRef, useEffect } from "react";
//COMPONENTS
import Nav from "../Components/Nav";
import Design from "../Components/lookAndFeel/Design";
import FooterSection from "../Components/Footer";
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

    const addClass = () => cursor.current.classList.add("cursorOnA");

    const removeClass = () => cursor.current.classList.remove("cursorOnA");

    const allLinks = document.querySelectorAll("a");

    window.addEventListener("mousemove", listener);

    allLinks.forEach((a) => a.addEventListener("mouseover", addClass));

    allLinks.forEach((a) => a.addEventListener("mouseout", removeClass));

    return () => {
      window.removeEventListener("mousemove", listener);

      allLinks.forEach((a) => a.removeEventListener("mouseover", addClass));

      allLinks.forEach((a) => a.removeEventListener("mouseout", removeClass));
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledCursor ref={cursor} />
      <Nav />
      <Design />
      <AnimatePresence exitBeforeEnter initial={false}>
        {/* <AnimatePresence> */}
        <Component {...pageProps} key={router} />
      </AnimatePresence>
      <Design />
      <FooterSection />
    </>
  );
}

export default MyApp;
