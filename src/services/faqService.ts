import { faqMock } from '@/services/mocks'
import type { FAQItem } from '@/types/faq'

export async function getFaqItems(): Promise<FAQItem[]> {
  return faqMock
}
