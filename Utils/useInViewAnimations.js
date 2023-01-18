import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useInViewAnimation = ({ threshold = 0.75 }) => {
  const controls = useAnimation();
  const [element, elementInView] = useInView({ threshold });

  useEffect(() => {
    if (elementInView) {
      controls.start("show");
    }
  }, [controls, elementInView, element]);

  return [element, controls];
};
