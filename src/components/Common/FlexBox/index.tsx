import { forwardRef } from "react";
import Box, { BoxProps } from "@mui/material/Box";

export default forwardRef(function FlexBox({ sx, ...props }: BoxProps, ref) {
  return (
    <Box
      ref={ref}
      sx={{
        ...sx,
        display: "flex",
      }}
      {...props}
    />
  );
});
