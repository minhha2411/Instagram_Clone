import React from "react";
import { ThemeProvider } from "@mui/material/styles";

function Theme(props: any) {
  return <ThemeProvider theme={props?.theme}>{props.children}</ThemeProvider>;
}

export default Theme;
