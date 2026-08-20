"use client";

import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/**
 * The reference's "compact" branch runs up to and including 1280px — verified by
 * fresh-loading it at 1024/1100/1200/1279/1280 (compact) and 1300/1366/1440
 * (desktop). That is Tailwind's `xl` edge, not `lg`.
 */
export function useIsTablet() {
  return useMediaQuery("(max-width: 1280px)");
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 639px)");
}
