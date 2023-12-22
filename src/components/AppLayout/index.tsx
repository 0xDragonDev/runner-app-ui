import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Box className="w-full" component="main">
        {children}
      </Box>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
