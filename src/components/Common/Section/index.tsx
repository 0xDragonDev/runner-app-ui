import { BoxProps } from "@mui/material/Box";

import FlexBox from "../FlexBox";

export default function Section({ className, ...props }: BoxProps) {
  return (
    <FlexBox
      className={"relative w-full ".concat(className || "")}
      component="section"
      {...props}
    />
  );
}
