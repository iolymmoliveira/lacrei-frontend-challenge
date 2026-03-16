'use client'

import { StyledNavLink } from './styles'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  return <StyledNavLink href={href}>{children}</StyledNavLink>
}
