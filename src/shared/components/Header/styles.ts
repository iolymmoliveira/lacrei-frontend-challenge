import styled from 'styled-components'
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

  button {
    padding: ${({ theme }) => theme.space.scale.xxs};
    min-width: 40px;
    min-height: 40px;
  }

  ${media.tablet`
    .btn-label {
      display: inline;
    }

    .btn-icon {
      display: none;
    }

    button {
      padding: 10px 32px;
      min-width: unset;
      min-height: unset;
    }
  `}
`
