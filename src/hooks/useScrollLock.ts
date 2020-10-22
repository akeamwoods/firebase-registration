import { useEffect } from "react";

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    isLocked
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLocked]);
}
