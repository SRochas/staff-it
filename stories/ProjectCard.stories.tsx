import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";
import ProjectCardHeader from "../components/ProjectCard/ProjectCardHeader";
import ProjectCardStats from "../components/ProjectCardStats";

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
    <ProjectCardStats
      energy={-50}
      credibility={35}
      qualityOfLife={-15}
      skills={85}
      socialCapital={80}
    />
  </ProjectCard>
);

export const ProjectCardTemplate = Template.bind({});
ProjectCardTemplate.args = {
  user: {
    name: "Jane Doe",
  },
};
