import React, { useState } from "react";
import type { MouseEvent } from "react";
import type { Meta, Story } from "@storybook/react";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";
import NavBar from "../components/NavBar/NavBar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const pages = ["Products", "Pricing", "Blog"];

type TemplateProps = {};

const StoryWithTheme = (Story) => {
  const mode = useDarkMode() ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export default {
  title: "Example/NavBar",
  component: NavBar,
  decorators: [StoryWithTheme],
} as Meta;

const Template: Story<TemplateProps> = ({}) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [currentTitle, setCurrentTitle] = useState(pages[0]);
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClickMenuItem =
    (title?: string) => (event: MouseEvent<HTMLElement>) => {
      if (title) {
        setCurrentTitle(title);
      }
      setAnchorElNav(null);
    };
  return (
    <NavBar
      onMenuClose={handleClickMenuItem()}
      title={currentTitle}
      anchorElNav={anchorElNav}
      onMenuOpen={handleOpenNavMenu}
    >
      {pages.map((page) => (
        <MenuItem key={page} onClick={handleClickMenuItem(page)}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </NavBar>
  );
};

export const BoardTemplate: Story<TemplateProps> = Template.bind({});

BoardTemplate.args = {};
