import type { Metadata } from 'next'
import { NotFoundHero } from '@/features/NotFound'

export const metadata: Metadata = {
  title: 'Página não encontrada — Lacrei Saúde',
  description: 'A página que você procura não existe ou foi movida.',
}

export default function NotFound() {
  return (
    <NotFoundHero
      title="Ops! Página não encontrada"
      subtitle="A URL pode estar errada ou a página foi movida. Volte para o início ou explore o menu."
      primaryCta={{
        href: '/',
        label: 'Voltar para a Home',
        ariaLabel: 'Navegar para a página inicial da Lacrei Saúde',
      }}
      secondaryCta={{
        href: '/contato',
        label: 'Falar com a Lacrei',
        ariaLabel:
          'Navegar para a página de contato da Lacrei Saúde - Não implementada',
      }}
    />
  )
}
