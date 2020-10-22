import { useEffect } from "react";

export function useKeyboardEvent(key: React.Key, callback: () => void) {
  useEffect(() => {
    const handler = function (event: KeyboardEvent) {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [callback, key]);
}
