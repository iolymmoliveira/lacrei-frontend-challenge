import styled from 'styled-components'
import Link from 'next/link'
import { typography } from '@/shared/utils/typography'

export const StyledNavLink = styled(Link)`
  ${typography('text-sm-high200')};
  text-decoration: none;
  color: ${({ theme }) => theme.color.text.body};
  padding: 4px 6px;
  border-radius: 4px;
  transition: color 200ms;

  &:hover {
    color: ${({ theme }) => theme.color.text.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focusInfo};
    outline-offset: 3px;
  }
`
