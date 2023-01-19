import React from "react";
import type { Meta, Story } from "@storybook/react";
import ProjectCard from "../components/ProjectCard/Card/Card";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";
import ProjectCardHeader from "../components/ProjectCard/Card/CardHeader";
import ProjectCardStats from "../components/ProjectCard/Card/CardStats";
import type { CardHeaderProps as ProjectCardHeaderProps } from "../components/ProjectCard/Card/CardHeader";
import type { CardStatsProps as ProjectCardStatsProps } from "../components/ProjectCard/Card/CardStats";

type TemplateProps = {
  header: ProjectCardHeaderProps["children"];
} & ProjectCardStatsProps;

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

const numberBetweenMinus100And100 = {
  control: {
    type: "number",
    min: -100,
    max: 100,
  },
};

export default {
  title: "Example/ProjectCard",
  component: ProjectCard,
  decorators: [StoryWithTheme],
  argTypes: {
    energy: numberBetweenMinus100And100,
    credibility: numberBetweenMinus100And100,
    qualityOfLife: numberBetweenMinus100And100,
    skills: numberBetweenMinus100And100,
    socialCapital: numberBetweenMinus100And100,
  },
} as Meta;

const Template: Story<TemplateProps> = ({ header, ...statsProps }) => (
  <ProjectCard sx={{ mt: 2, ml: 2 }}>
    <ProjectCardHeader>{header}</ProjectCardHeader>
    <ProjectCardStats {...statsProps} />
  </ProjectCard>
);

export const ProjectCardTemplate: Story<TemplateProps> = Template.bind({});

ProjectCardTemplate.args = {
  header: "Project Name",
  energy: -50,
  credibility: 35,
  qualityOfLife: -15,
  skills: 85,
  socialCapital: 80,
};
