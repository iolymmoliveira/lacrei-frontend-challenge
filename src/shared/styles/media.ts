import { css } from 'styled-components'
import { theme } from './theme'

type Breakpoint = keyof typeof theme.breakpoints

type Media = Record<
  Breakpoint,
  (..._args: Parameters<typeof css>) => ReturnType<typeof css>
>

export const media = Object.keys(theme.breakpoints).reduce((acc, label) => {
  const breakpoint = label as Breakpoint

  acc[breakpoint] = (..._args: Parameters<typeof css>) => {
    const innerStyles = css(..._args)

    return css`
      @media (min-width: ${theme.breakpoints[breakpoint]}) {
        ${innerStyles}
      }
    `
  }

  return acc
}, {} as Media)
