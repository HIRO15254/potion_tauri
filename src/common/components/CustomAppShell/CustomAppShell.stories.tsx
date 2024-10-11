import {Meta, StoryObj} from '@storybook/react';
import {CustomAppShell} from "./CustomAppShell.tsx";

const meta = {
  title: 'Common/AppShell/MyAppShell',
  component: CustomAppShell,
} satisfies Meta<typeof CustomAppShell>;

export default meta;

type Story = StoryObj<typeof CustomAppShell>;

export const Default = {
  args: {
    children: 'CustomAppShell',
  },
} satisfies Story;
