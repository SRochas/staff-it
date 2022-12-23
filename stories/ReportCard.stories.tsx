import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReportCard from "../components/ReportCard/ReportCard";
import Stat from "../components/ReportCard/Stat";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";
import Header from "../components/ReportCard/Header";

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
  title: "Example/ReportCard",
  component: ReportCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [StoryWithTheme],
} as ComponentMeta<typeof ReportCard>;

const Template: ComponentStory<typeof ReportCard> = (args) => (
  <ReportCard {...args}>
    <Header>CDF</Header>
    <Stat name="Energy" color="error" value={25} />
  </ReportCard>
);

export const ReportCardTemplate = Template.bind({});
ReportCardTemplate.args = {
  user: {
    name: "Jane Doe",
  },
};
