import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Primary Button',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create new',
  },
}
