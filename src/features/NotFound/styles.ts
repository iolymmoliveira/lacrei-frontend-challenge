import styled, { css } from 'styled-components'
import { typography } from '@/shared/utils/typography'
import { media } from '@/shared/styles/media'

export const Section = styled.section`
  padding: ${({ theme }) => theme.space.stack.lg} 0;
`

export const Content = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.stack.md};
  align-items: center;

  ${media.tablet`
    grid-template-columns: 1.1fr 0.9fr;
    gap: ${({ theme }) => theme.space.stack.lg};
  `}
`

export const TextWrap = styled.div`
  text-align: center;

  ${media.tablet`
    text-align: left;
  `}
`

export const Title = styled.h1`
  ${typography('headline-xl')};
  color: ${({ theme }) => theme.color.text.heading};
  margin-bottom: ${({ theme }) => theme.space.stack.sm};
`

export const Subtitle = styled.p`
  ${typography('text-xl')};
  color: ${({ theme }) => theme.color.text.body};
  margin-bottom: ${({ theme }) => theme.space.stack.md};
`

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.stack.sm};
  justify-content: center;

  ${media.tablet`
    justify-content: flex-start;
  `}
`

const primaryStyles = css`
  background: ${({ theme }) => theme.color.background.accent};
  color: ${({ theme }) => theme.color.text.invert};
  border-color: transparent;

  &:hover {
    background: ${({ theme }) => theme.color.background.accentHover};
  }

  &:active {
    background: ${({ theme }) => theme.color.background.accentPressed};
  }
`

const secondaryStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.color.text.accent};
  border-color: ${({ theme }) => theme.color.border.accent};

  &:hover {
    background: ${({ theme }) => theme.color.background.success};
  }

  &:active {
    background: ${({ theme }) => theme.color.background.successHover};
  }
`

export const StyledButton = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 32px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-decoration: none;
  ${typography('text-base-high200')};
  transition:
    background-color 200ms,
    color 200ms,
    border-color 200ms;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.border.focusInfo};
  }

  &:active {
    border-color: ${({ theme }) => theme.color.border.focusInfo};
  }

  ${({ $variant = 'primary' }) =>
    $variant === 'primary' ? primaryStyles : secondaryStyles}
`

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 520px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`
