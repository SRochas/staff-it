import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectCardStat from "../components/ProjectCard/ProjectCardStat";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";
import ProjectCardHeader from "../components/ProjectCard/ProjectCardHeader";

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
  title: "Example/ProjectCard",
  component: ProjectCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [StoryWithTheme],
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => (
  <ProjectCard {...args} sx={{ mt: 2, ml: 2 }}>
    <ProjectCardHeader>CDF</ProjectCardHeader>
    <ProjectCardStat name="Energy" color="error" value={50} />
    <ProjectCardStat name="Credibility" color="success" value={35} />
    <ProjectCardStat name="Quality of life" color="error" value={15} />
    <ProjectCardStat name="Skills" color="success" value={85} />
    <ProjectCardStat name="Social capital" color="success" value={80} />
  </ProjectCard>
);

export const ProjectCardTemplate = Template.bind({});
ProjectCardTemplate.args = {
  user: {
    name: "Jane Doe",
  },
};
