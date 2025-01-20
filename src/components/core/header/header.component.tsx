import { memo } from "react";
import { AppBar, Toolbar, Badge } from "@mui/material";
import { Box, IconButton } from "@mui/joy";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { SITE_INFO } from "../../../constants";
import { THEME } from "../../../styles";
import { HeaderProps } from "./header.interface";

export const Header = memo((props: HeaderProps) => {
  const { open, toggleMenu } = props;
  const theme = useTheme();

  // Toolbar 共通スタイル定義
  const iconButtonStyle = {
    color: THEME.palette.primary.contrastText,
    "&:hover": { backgroundColor: THEME.palette.primary.dark },
  };

  return (
    <AppBar
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: THEME.palette.background.default,
      }}
    >
      <Toolbar variant="dense">
        {/* >> Menu Button ---------------------- */}
        <IconButton
          aria-label="menu"
          variant="outlined"
          sx={iconButtonStyle}
          onClick={toggleMenu}
        >
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>

        {/* >> Site Title Link ---------------------- */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: theme.palette.primary.contrastText,
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: 15,
              fontWeight: "bold",
              p: 0.5,
              m: 2,
            }}
          >
            {SITE_INFO.NAME}
          </Box>
        </Link>

        {/* >> Space ---------------------- */}
        <Box sx={{ flexGrow: 1 }} />

        {/* >> Notifications Button ---------------------- */}
        <Box sx={{ display: "flex" }}>
          <IconButton
            aria-label="notifications"
            variant="outlined"
            sx={iconButtonStyle}
          >
            <Badge
              badgeContent={1}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 12,
                },
              }}
            >
              <NotificationsIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
});
