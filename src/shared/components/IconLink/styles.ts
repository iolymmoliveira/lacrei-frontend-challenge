import styled from 'styled-components'

export const StyledIconLink = styled.a`
  color: inherit;
  transition:
    color 200ms,
    background-color 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.scale.xxs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid transparent;

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
`
