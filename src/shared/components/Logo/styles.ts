import styled from 'styled-components'
import { typography } from '@/shared/utils/typography'

interface LogoImageProps {
  $showIconOnMobile: boolean
}

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: ${({ theme }) => theme.space.inline.xs};
`

export const LogoImage = styled.div<LogoImageProps>`
  display: ${({ $showIconOnMobile }) => ($showIconOnMobile ? 'block' : 'none')};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`

export const Stamp = styled.span`
  ${typography('headline-sm-high200')}
  background: ${({ theme }) => theme.color.gradient.secondary};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-clip: text;
  color: transparent;
`
