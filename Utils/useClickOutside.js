import { useEffect } from "react";

export const useClickOutside = ({ handler, elmRef }) => {
  useEffect(() => {
    const listener = (event) => {
      if (!elmRef?.current || elmRef?.current.contains(event.target)) {
        return;
      }
      console.log("hey")
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [elmRef, handler]);
};
