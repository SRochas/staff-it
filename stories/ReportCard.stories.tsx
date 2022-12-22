import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReportCard } from './ReportCard';

export default {
  title: 'Example/ReportCard',
  component: ReportCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ReportCard>;

const Template: ComponentStory<typeof ReportCard> = (args) => <ReportCard {...args} />;

export const ReportCardTemplate = Template.bind({});
ReportCardTemplate .args = {
  user: {
    name: 'Jane Doe',
  },
};
