import { forwardRef } from "react";
import Box, { BoxProps } from "@mui/material/Box";

export default forwardRef(function Form(props: BoxProps<"form">, ref) {
  return <Box ref={ref} component="form" {...props} />;
});
