import React from "react";
import type { Meta, Story } from "@storybook/react";
import CardContainer from "../components/ProjectCard/Container/Container";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";

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
  title: "Example/CardContainer",
  component: CardContainer,
  decorators: [StoryWithTheme],
} as Meta;

const Template: Story<TemplateProps> = () => <CardContainer />;

export const ProjectCardTemplate: Story<TemplateProps> = Template.bind({});

ProjectCardTemplate.args = {};
