import { css, type Interpolation } from 'styled-components'
import { theme } from './theme'

type Breakpoint = keyof typeof theme.breakpoints

type MediaFunction = (
  strings: TemplateStringsArray,
  ...interpolations: Interpolation<object>[]
) => ReturnType<typeof css>

type Media = {
  [K in Breakpoint]: MediaFunction
}

export const media = Object.keys(theme.breakpoints).reduce((acc, label) => {
  const breakpoint = label as Breakpoint

  acc[breakpoint] = (
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
  ) => css`
    @media (min-width: ${theme.breakpoints[breakpoint]}) {
      ${css(strings, ...interpolations)}
    }
  `

  return acc
}, {} as Media)
