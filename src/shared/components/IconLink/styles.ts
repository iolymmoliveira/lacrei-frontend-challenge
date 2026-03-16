import styled from 'styled-components'

export const StyledIconLink = styled.a`
  color: inherit;
  transition: color 200ms;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.color.text.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focusInfo};
    outline-offset: 2px;
    border-radius: 4px;
  }
`
