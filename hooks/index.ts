import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(
  callback: () => void,
  excludeRef?: React.RefObject<T>
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickedOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        (!excludeRef?.current || !excludeRef.current.contains(e.target as Node))
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, [callback, excludeRef]);
  return ref;
}
