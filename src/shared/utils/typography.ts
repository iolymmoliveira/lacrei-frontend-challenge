import { DefaultTheme } from 'styled-components'

export const typography =
  (variant: keyof DefaultTheme['typography']['styles']) =>
  ({ theme }: { theme: DefaultTheme }) =>
    theme.typography.styles[variant]
