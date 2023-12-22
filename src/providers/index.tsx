import React from "react";

import ScrollPositionProvider from "./ScrollPositionProvider";

export default function AppProvider({ children }: React.PropsWithChildren) {
  return <ScrollPositionProvider>{children}</ScrollPositionProvider>;
}
