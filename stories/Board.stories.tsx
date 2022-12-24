import React from "react";
import type { Meta, Story } from "@storybook/react";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";
import Board from "../components/Board/Board";
import { ListItemText, ListSubheader } from "@mui/material";

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
  title: "Example/Board",
  component: Board,
  decorators: [StoryWithTheme],
} as Meta;

const Template: Story<TemplateProps> = ({}) => (
  <Board header="Nested List Items">
    <ListItemText>Hey there 1</ListItemText>
    <ListItemText>Hey there 2</ListItemText>
  </Board>
);

export const BoardTemplate: Story<TemplateProps> = Template.bind({});

BoardTemplate.args = {};
