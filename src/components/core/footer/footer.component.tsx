import { memo } from "react";
import { Box, useTheme } from "@mui/material";
import { Copyright } from "../copyright";
import { FooterProps } from "./footer.interface";

export const Footer = memo((props: FooterProps) => {
  const { open } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 10,
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: open ? "240px" : "0px",
      }}
    >
      <Copyright />
    </Box>
  );
});
