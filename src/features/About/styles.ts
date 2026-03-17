import styled from 'styled-components'
import { typography } from '@/shared/utils/typography'
import { media } from '@/shared/styles/media'

export const Section = styled.section`
  padding: ${({ theme }) => theme.space.stack.lg} 0;
`

export const PageTitle = styled.h1`
  ${typography('headline-xl')};
  color: ${({ theme }) => theme.color.text.heading};
  margin-bottom: ${({ theme }) => theme.space.stack.lg};
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.stack.xs};
  margin-bottom: ${({ theme }) => theme.space.stack.lg};
  padding: ${({ theme }) => theme.space.inset.sm};
  border-left: 4px solid ${({ theme }) => theme.color.border.accent};
  border-radius: 0 ${({ theme }) => theme.borderRadius.sm}
    ${({ theme }) => theme.borderRadius.sm} 0;
  background-color: ${({ theme }) => theme.color.background.default};

  ${media.tablet`
    padding: ${({ theme }) => theme.space.inset.md};
  `}
`

export const BlockTitle = styled.h2`
  ${typography('headline-sm-high200')};
  color: ${({ theme }) => theme.color.text.heading};
`

export const BlockText = styled.p`
  ${typography('text-base')};
  color: ${({ theme }) => theme.color.text.body};
  line-height: 1.8;
`

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.color.text.pressed};
  text-decoration: underline;
  transition: color 200ms;

  &:hover {
    color: ${({ theme }) => theme.color.text.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focusInfo};
    outline-offset: 3px;
    border-radius: 4px;
  }
`
