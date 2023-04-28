import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  borderRadius: '$sm',
  padding: '$3 $6',
  color: '$white',
  fontSize: '$sm',
  lineHeight: '$base',
  border: 'none',
})

export interface ButtonProps extends ComponentProps<typeof Button> {}
