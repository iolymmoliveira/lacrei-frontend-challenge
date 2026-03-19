'use client'

import { Container } from '@/shared/components/Container'
import { Logo } from '@/shared/components/Logo'
import { StyledHeader, Nav, NavGroup, NavLinks, NavButton } from './styles'
import { People, Help } from '@/shared/components/Icons'

const NAV_LINKS = [
  {
    href: '/quem-somos',
    label: 'Quem somos',
    ariaLabel: 'Navegar para a página Quem Somos',
    testId: 'nav-link-quem-somos',
    icon: <People />,
  },
  {
    href: '/ajuda',
    label: 'Ajuda',
    ariaLabel: 'Navegar para a página Ajuda',
    testId: 'nav-link-ajuda',
    icon: <Help />,
  },
] as const

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav aria-label="Navegação principal">
          <Logo />
          <NavGroup>
            <NavLinks>
              {NAV_LINKS.map(({ href, label, ariaLabel, testId, icon }) => (
                <NavButton
                  key={href}
                  href={href}
                  aria-label={ariaLabel}
                  data-testid={testId}
                >
                  <span className="btn-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="btn-label">{label}</span>
                </NavButton>
              ))}
            </NavLinks>
          </NavGroup>
        </Nav>
      </Container>
    </StyledHeader>
  )
}
