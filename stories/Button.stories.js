import { ButtonNew } from '../components/ButtonNew';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: ButtonNew
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Building with Salil'
  }
};