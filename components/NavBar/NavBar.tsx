import React, { ReactNode, useState } from "react";
import type { MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import DynamicLoginButton from "./DynamicLoginButton";

export type NavBarProps = {
  children?: ReactNode | ReactNode[];
  onMenuClose: (event: MouseEvent<HTMLElement>) => void;
  onMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  title: string;
  anchorElNav?: HTMLElement;
  avatarUrl?: string;
  avatarAltText?: string;
};

const NavBar = ({
  children,
  title,
  onMenuClose,
  onMenuOpen,
  anchorElNav,
  avatarUrl,
  avatarAltText,
}: NavBarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prev: boolean) => !prev);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={onMenuClose}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {children}
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <DynamicLoginButton
          avatarUrl={avatarUrl}
          avatarAltText={avatarAltText}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
