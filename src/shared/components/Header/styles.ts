import styled from 'styled-components'
import Link from 'next/link'
import { media } from '@/shared/styles/media'

export const StyledHeader = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.space.inset.md} 0;
  background: ${({ theme }) => theme.color.gradient.subtle};
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.inline.md};
`

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.inline.sm};

  .btn-label {
    display: none;
  }

  .btn-icon {
    display: flex;
    align-items: center;
  }

  ${media.tablet`
    .btn-label {
      display: inline;
    }

    .btn-icon {
      display: none;
    }
  `}
`

export const NavButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.scale.xxs};
  padding: 10px 32px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.background.default};
  color: ${({ theme }) => theme.color.text.accent};
  font-size: ${({ theme }) => theme.typography.styles['text-base'].fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.styles['text-base-high200'].fontWeight};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 200ms,
    border-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.background.success};
    color: ${({ theme }) => theme.color.text.hover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.border.focusInfo};
  }

  &:active {
    border-color: ${({ theme }) => theme.color.border.focusInfo};
    background-color: ${({ theme }) => theme.color.background.successPressed};
  }

  &:visited {
    color: ${({ theme }) => theme.color.text.accent};
  }

  /* Mobile — apenas ícone */
  ${media.tablet`
    padding: 10px 32px;
  `}

  @media (max-width: 719px) {
    padding: ${({ theme }) => theme.space.scale.xxs};
    min-width: 40px;
    min-height: 40px;
  }
`
