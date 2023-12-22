import { styled, Breakpoint } from "@mui/material";
import MuiContainer from "@mui/material/Container";
import { entries } from "lodash";

const maxWValues = {
  sm: 312,
  md: 360,
  lg: 420,
  tablet: 720,
  laptop: 1020,
  desktop: 1200,
  xl: 1600,
  xxl: 1800,
};

const Container = styled(MuiContainer)(({ theme: { breakpoints } }) =>
  entries(maxWValues).reduce((styles, [breakpoint, maxWidth]) => ({
    ...styles,
    [breakpoints.up(breakpoint as Breakpoint)]: { maxWidth },
  }))
);

export default Container;
