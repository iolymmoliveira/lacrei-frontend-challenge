'use client'

import { Container } from '../Container'
import type { FAQItem } from '@/types/faq'
import {
  Section,
  PageTitle,
  PageSubtitle,
  FAQList,
  FAQItem as FAQItemStyled,
  FAQQuestion,
  FAQAnswer,
  ContactBlock,
  ContactText,
  ContactLink,
} from './styles'

interface HelpPageProps {
  faqItems: FAQItem[]
}

export function HelpPage({ faqItems }: HelpPageProps) {
  return (
    <Section aria-labelledby="help-title">
      <Container>
        <PageTitle id="help-title">Central de Ajuda</PageTitle>
        <PageSubtitle>
          Encontre respostas para as principais dúvidas sobre a Lacrei Saúde.
        </PageSubtitle>

        <FAQList>
          {faqItems.map(({ id, question, answer }) => (
            <FAQItemStyled key={id}>
              <FAQQuestion>{question}</FAQQuestion>
              <FAQAnswer>{answer}</FAQAnswer>
            </FAQItemStyled>
          ))}
        </FAQList>

        <ContactBlock>
          <ContactText>Não encontrou o que procurava?</ContactText>
          <ContactLink
            href="mailto:contato@lacreisaude.com.br"
            aria-label="Enviar e-mail para o suporte da Lacrei Saúde"
          >
            Entre em contato com nosso suporte
          </ContactLink>
        </ContactBlock>
      </Container>
    </Section>
  )
}
