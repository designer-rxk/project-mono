import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './index';

const meta = {
  title: 'Form/TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Name',
    placeholder: 'John Doe',
    description: 'Please enter your full name',
  },
};

export const DefaultValue: Story = {
  args: {
    label: 'Name',
    placeholder: 'John Doe',
    defaultValue: 'Peter Griffin',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Name',
    placeholder: 'John Doe',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    label: 'Text',
    errorMessage: 'Please enter some text',
  },
};
