import { Button } from './Button';
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { options: ["primary", "secondary", "tertiary"] },
    size: { options: ["lg", "md", "sm", "xs"] },
    iconPosition: { options: ["left", "right"] }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Primary',
    variant: 'primary'
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
    variant: 'secondary'
  },
};

export const Tertiary = {
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  },
};

export const ButtonWithIcon = {
  args: {
    label: 'Button With Icon',
    variant: 'primary',
    icon: <InfoIcon />
  },
};

export const IconButton = {
  args: {
    label: 'Icon Button',
    variant: 'primary',
    iconButton: true,
    textButton: false,
  },
};

export const TextButton = {
  args: {
    label: 'Text Button',
    variant: 'primary',
    textButton: true,
    iconButton: false,
  },
};