'use client'

import {
  Section,
  PageTitle,
  Block,
  BlockTitle,
  BlockText,
  ExternalLink,
} from './styles'
import { Container } from '@/shared/components/Container'

export const AboutPage = () => {
  return (
    <Section aria-labelledby="about-title">
      <Container>
        <PageTitle id="about-title">Quem Somos</PageTitle>

        <Block>
          <BlockTitle>Sobre este projeto</BlockTitle>
          <BlockText>
            Esta aplicação é um desafio técnico de frontend desenvolvido como
            parte do processo seletivo para voluntariado na Lacrei Saúde. O
            objetivo é demonstrar boas práticas de desenvolvimento com Next.js,
            TypeScript e Styled-Components, com foco em acessibilidade,
            performance e Clean Code.
          </BlockText>
          <BlockText>
            As páginas, rotas e conteúdos aqui presentes são simulações criadas
            para fins de avaliação técnica e não representam a plataforma real
            da Lacrei Saúde.
          </BlockText>
        </Block>

        <Block>
          <BlockTitle>Sobre a Lacrei Saúde</BlockTitle>
          <BlockText>
            A Lacrei Saúde é uma plataforma digital de saúde inclusiva que
            conecta pessoas LGBTQIA+ a profissionais de saúde capacitados para
            oferecer atendimento seguro, respeitoso e livre de discriminação.
            Fundada com o propósito de reduzir as barreiras de acesso à saúde
            para a comunidade LGBTQIA+, a Lacrei atua conectando pacientes a
            médicos, psicólogos, nutricionistas e outros profissionais
            comprometidos com um cuidado humanizado.
          </BlockText>
          <BlockText>
            Para conhecer a plataforma real e saber mais sobre a missão da
            Lacrei Saúde, acesse:{' '}
            <ExternalLink
              href="https://lacreisaude.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar o site oficial da Lacrei Saúde em nova aba"
            >
              lacreisaude.com.br
            </ExternalLink>
          </BlockText>
        </Block>
      </Container>
    </Section>
  )
}
