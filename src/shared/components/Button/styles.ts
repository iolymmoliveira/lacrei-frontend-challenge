import styled from 'styled-components'
import { typography } from '@/shared/utils/typography'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop),
})<{
  variant: ButtonVariant
  size: ButtonSize
}>`
  background: ${({ theme }) => theme.color.background.default};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  padding: 10px 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.scale.xxs};

  color: ${({ theme }) => theme.color.text.accent};
  ${typography('text-base-high200')};

  transition:
    background-color 200ms,
    color 200ms,
    border-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.background.success};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.border.focusInfo};
  }

  &:active {
    outline: none;
    border-color: ${({ theme }) => theme.color.border.focusInfo};
    background-color: ${({ theme }) => theme.color.background.successPressed};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.background.disabled};
    color: ${({ theme }) => theme.color.text.disabled};
    border-color: transparent;
    cursor: not-allowed;
  }

  svg {
    display: block;
    flex-shrink: 0;
  }
`
