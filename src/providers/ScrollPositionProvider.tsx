import React, { createContext, useContext, useState, useEffect } from "react";

type Context = {
  scrollX: number;
  scrollY: number;
};

const defaultValue = {
  scrollX: 0,
  scrollY: 0,
};

const ScrollPositionContext = createContext<Context>(defaultValue);

export function useScrollPosition() {
  if (!ScrollPositionContext) {
    throw new Error(
      "useScrollPosition() must be invoked inside a ScrollPositionProvider."
    );
  }
  return useContext(ScrollPositionContext);
}

export default function ScrollPositionProvider({
  children,
}: React.PropsWithChildren) {
  const [scrollPos, setScrollPos] = useState({ scrollX: 0, scrollY: 0 });

  const handleScroll = () => {
    const { scrollX, scrollY } = window;
    setScrollPos({ scrollX, scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { Provider } = ScrollPositionContext;

  return <Provider value={scrollPos}>{children}</Provider>;
}
