import { Button, ButtonProps } from './Button'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {}