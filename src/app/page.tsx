import { Hero } from '@/shared/components/Hero'

export default function Home() {
  return (
    <>
      <Hero
        title="Boas vindas ao meu desafio na Lacrei Saúde"
        subtitle="Desafio de Frontend para voluntariado em React.js — Next.js (App Router), TypeScript e Styled-Components com foco em performance e acessibilidade"
        imageSrc="/images/bemvindo.png"
        imageAlt="Imagem com escrito bem vindo em várias línguas e cores"
        priority
      />
    </>
  )
}
