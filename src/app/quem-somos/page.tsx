import type { Metadata } from 'next'
import { AboutPage } from '@/features/About'

export const metadata: Metadata = {
  title: 'Quem Somos | Lacrei Saúde',
  description: 'Conheça a Lacrei Saúde e o contexto deste desafio de frontend.',
}

export default function QuemSomos() {
  return <AboutPage />
}
