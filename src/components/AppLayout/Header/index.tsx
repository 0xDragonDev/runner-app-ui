import { useMemo, useState } from "react";
import { Link } from "react-scroll";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MuiLink from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import SVG from "react-inlinesvg";
import tw from "twin.macro";

import { useScrollPosition } from "~/providers/ScrollPositionProvider";
import Container from "~/components/Common/Container";
import FlexBox from "~/components/Common/FlexBox";

const navLinks = [
  "home",
  "features",
  "screenshots",
  "subscribe",
  "pricing",
  "testimonials",
  "blogs",
  "contact",
];

const Logo = styled(SVG)({
  ...tw`w-auto xl:h-16`,
  transform: "translateY(-6px)",
});

const NavLink = styled(Link)({
  ...tw`w-full laptop:w-fit border-0 text-center text-sm xl:text-lg xxl:text-xl font-semibold mx-4 xl:mx-5 py-3 cursor-pointer border-t laptop:border-0 first-of-type:border-0 border-solid first-letter:uppercase hover:text-black`,
  borderTopColor: "#fff5",
});

const DownloadButton = styled(MuiLink)({
  ...tw`text-heading text-base xl:text-lg xxl:text-xl font-medium uppercase rounded-full bg-white ms-4 px-9 py-4 hidden laptop:block`,
  boxShadow: "3px 4px 25px 0px #F1AA27",
  "&:hover": tw`text-black bg-contrast`,
});

export default function Header() {
  const [menuOpened, showMenu] = useState<boolean>(false);
  const { scrollY } = useScrollPosition();
  const { breakpoints } = useTheme();
  const isLaptop = useMediaQuery(breakpoints.between("laptop", "desktop"));

  const appBarBg = scrollY || menuOpened ? "bg-primary" : "bg-transparent";

  const appBarProps = useMemo(
    () => ({ className: `xl:py-2 border-0 ${appBarBg}` }),
    [appBarBg]
  );

  const logoProps = useMemo(() => {
    return {
      src: "assets/logo/logo"
        .concat(isLaptop ? "-sm" : "")
        .concat(appBarBg === "bg-primary" ? "-w" : "")
        .concat(".svg"),
    };
  }, [appBarBg, isLaptop]);

  return (
    <ClickAwayListener onClickAway={() => showMenu(false)}>
      <AppBar
        position="fixed"
        component="header"
        variant="outlined"
        elevation={0}
        {...appBarProps}
      >
        <Container className="flex flex-col laptop:flex-row items-center justify-between py-4">
          <FlexBox className="items-center justify-between w-full">
            <Box>
              <Logo {...logoProps} />
            </Box>
            <IconButton
              className="laptop:hidden"
              onClick={() => showMenu((prev) => !prev)}
              sx={{ color: "inherit" }}
              size="large"
            >
              <MenuIcon />
            </IconButton>
          </FlexBox>
          <FlexBox
            className={`${
              menuOpened ? "" : "hidden"
            } laptop:flex flex-col laptop:flex-row w-full items-center`}
          >
            {navLinks.map((to) => (
              <NavLink key={to} activeClass="text-black" spy to={to}>
                {to}
              </NavLink>
            ))}
            <DownloadButton href="#" target="_blank">
              Download
            </DownloadButton>
          </FlexBox>
        </Container>
      </AppBar>
    </ClickAwayListener>
  );
}
