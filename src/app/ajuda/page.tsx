import { HelpPage } from '@/shared/components/HelpPage'
import { getFaqItems } from '@/services/faqService'

export const metadata = {
  title: 'Ajuda | Lacrei Saúde',
  description: 'Tire suas dúvidas sobre a plataforma Lacrei Saúde',
}

export default async function Ajuda() {
  const faqItems = await getFaqItems()
  return <HelpPage faqItems={faqItems} />
}
