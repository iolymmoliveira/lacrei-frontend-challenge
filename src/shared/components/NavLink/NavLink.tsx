'use client'

import { StyledNavLink } from './styles'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  testId?: string
}

export function NavLink({ href, children, testId }: NavLinkProps) {
  return (
    <StyledNavLink href={href} data-testid={testId}>
      {children}
    </StyledNavLink>
  )
}
