import styled from 'styled-components'
import { typography } from '@/shared/utils/typography'
import { media } from '@/shared/styles/media'

export const Section = styled.section`
  padding: ${({ theme }) => theme.space.stack.lg} 0;
`

export const PageTitle = styled.h1`
  ${typography('headline-base')};
  color: ${({ theme }) => theme.color.text.heading};
  margin-bottom: ${({ theme }) => theme.space.stack.xs};
`

export const PageSubtitle = styled.p`
  ${typography('text-xl')};
  color: ${({ theme }) => theme.color.text.body};
  margin-bottom: ${({ theme }) => theme.space.stack.lg};
`

export const FAQList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.stack.sm};
  margin-bottom: ${({ theme }) => theme.space.stack.lg};
`

export const FAQItem = styled.li`
  padding: ${({ theme }) => theme.space.inset.sm};
  border: 1px solid ${({ theme }) => theme.color.border.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.color.background.default};

  ${media.tablet`
    padding: ${({ theme }) => theme.space.inset.md};
  `}
`

export const FAQQuestion = styled.h2`
  ${typography('headline-sm-high200')};
  color: ${({ theme }) => theme.color.text.accent};
  margin-bottom: ${({ theme }) => theme.space.stack.xs};
`

export const FAQAnswer = styled.p`
  ${typography('text-base')};
  color: ${({ theme }) => theme.color.text.body};
`

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.stack.xs};
  padding: ${({ theme }) => theme.space.inset.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.color.background.default};
  text-align: center;
`

export const ContactText = styled.p`
  ${typography('text-base-high200')};
  color: ${({ theme }) => theme.color.text.body};
`

export const ContactLink = styled.a`
  ${typography('text-base-high200')};
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
