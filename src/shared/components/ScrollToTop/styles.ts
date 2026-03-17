import styled from 'styled-components'

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 78px;
  right: ${({ theme }) => theme.space.scale.md};
  z-index: 50;

  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid transparent;

  background-color: ${({ theme }) => theme.color.background.accent};
  color: ${({ theme }) => theme.color.text.invert};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition:
    background-color 200ms,
    border-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.background.accentHover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.border.focusInfo};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.background.accentPressed};
    border-color: ${({ theme }) => theme.color.border.focusInfo};
  }
`
