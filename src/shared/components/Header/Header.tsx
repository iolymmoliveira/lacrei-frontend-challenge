'use client'

import { Container } from '@/shared/components/Container'
import { Button } from '@/shared/components/Button'
import { Logo } from '@/shared/components/Logo'
import { StyledHeader, Nav, NavGroup, NavLinks } from './styles'
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
                <Button
                  key={href}
                  variant="primary"
                  size="md"
                  icon={icon}
                  testId={testId}
                  aria-label={ariaLabel}
                  onClick={() => window.location.assign(href)}
                >
                  {label}
                </Button>
              ))}
            </NavLinks>
          </NavGroup>
        </Nav>
      </Container>
    </StyledHeader>
  )
}
