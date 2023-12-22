import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";

import { useScrollPosition } from "~/providers/ScrollPositionProvider";

export default function ScrollToTopButton() {
  const { scrollY } = useScrollPosition();

  if (!scrollY) {
    return null;
  }

  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <IconButton
      className="fixed rounded-full"
      sx={{
        width: 45,
        height: 45,
        right: 50,
        bottom: 75,
        zIndex: 1e5,
        backgroundColor: "#1d51b3 !important",
      }}
      onClick={scrollToTop}
    >
      <Icon className="text-white" icon="fa6-solid:turn-up" />
    </IconButton>
  );
}
