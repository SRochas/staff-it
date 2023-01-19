import React from "react";
import type { Meta, Story } from "@storybook/react";
import ProjectCard from "../components/ProjectCard/Card/Card";
import ProjectCardHeader, {type CardHeaderProps as ProjectCardHeaderProps} from "../components/ProjectCard/Card/CardHeader";
import ProjectCardStats, {type CardStatsProps as ProjectCardStatsProps} from "../components/ProjectCard/Card/CardStats";
import CardContainer from "../components/ProjectCard/Container/Container";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";

type TemplateProps = Array<{
  header: ProjectCardHeaderProps["children"];
  energy: ProjectCardStatsProps['energy'];
  credibility: ProjectCardStatsProps['credibility'];
  qualityOfLife: ProjectCardStatsProps['qualityOfLife'];
  skills: ProjectCardStatsProps['skills'];
  socialCapital: ProjectCardStatsProps['socialCapital'];
}>;

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

// const numberBetweenMinus100And100 = {
//   control: {
//     type: "number",
//     min: -100,
//     max: 100,
//   },
// };

export default {
  title: "Example/CardContainer",
  component: CardContainer,
  decorators: [StoryWithTheme],
  // argTypes: {
  //   energy: numberBetweenMinus100And100,
  //   credibility: numberBetweenMinus100And100,
  //   qualityOfLife: numberBetweenMinus100And100,
  //   skills: numberBetweenMinus100And100,
  //   socialCapital: numberBetweenMinus100And100,
  // },
} as Meta;

const Template: Story<TemplateProps> = (props) => {
  console.log(`props is `, props)
  return (
  <CardContainer>
    {Object.values(props).map(({header, ...statsProps}, idx) => (
      <ProjectCard sx={{ mt: 2, ml: 2 }}>
        <ProjectCardHeader>{header}</ProjectCardHeader>
        <ProjectCardStats {...statsProps} />
      </ProjectCard>
))}
  </CardContainer>);
};

export const ProjectCardTemplate: Story<TemplateProps> = Template.bind({});

ProjectCardTemplate.args = [
  {
  header: "Project Name",
  energy: -50,
  credibility: 35,
  qualityOfLife: -15,
  skills: 85,
  socialCapital: 80,
}
];
