'use client'

import { StyledIconLink } from './styles'

interface IconLinkProps {
  href: string
  label: string
  icon: React.ReactNode
  testId?: string
}

export function IconLink({ href, label, icon, testId }: IconLinkProps) {
  return (
    <StyledIconLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-testid={testId}
    >
      {icon}
    </StyledIconLink>
  )
}
