'use client'

import { Container } from '../Container'
import { IconLink } from '../IconLink'
import { LinkedIn, GitHub } from '../Icons'
import {
  StyledFooter,
  IconsContainer,
  Wrapper,
  TextContainer,
  Paragraph,
} from './styles'

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/iolymmoliveira/',
    label: 'Ícone de redirecionamento para o LinkedIn do desenvolvedor(a)',
    icon: <LinkedIn />,
    testId: 'footer-link-linkedin',
  },
  {
    href: 'https://github.com/iolymmoliveira',
    label: 'Ícone de redirecionamento para o GitHub do desenvolvedor(a)',
    icon: <GitHub />,
    testId: 'footer-link-github',
  },
] as const

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <IconsContainer>
            {SOCIAL_LINKS.map(({ href, label, icon, testId }) => (
              <IconLink
                key={href}
                href={href}
                label={label}
                icon={icon}
                testId={testId}
              />
            ))}
          </IconsContainer>
          <TextContainer>
            <Paragraph>By Ioly Oliveira - © 2026</Paragraph>
            <Paragraph>Todos os direitos reservados</Paragraph>
          </TextContainer>
        </Wrapper>
      </Container>
    </StyledFooter>
  )
}
