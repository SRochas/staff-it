import React from "react";
import type { Meta, Story } from "@storybook/react";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";
import NavBar from "../components/NavBar/NavBar";

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

const Template: Story<TemplateProps> = ({}) => <NavBar />;

export const BoardTemplate: Story<TemplateProps> = Template.bind({});

BoardTemplate.args = {};
