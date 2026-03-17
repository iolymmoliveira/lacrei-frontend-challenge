import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'
import Providers from '@/lib/Providers'
import { Nunito } from 'next/font/google'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { Container } from '@/shared/components/Container'
import { ScrollToTop } from '@/shared/components/ScrollToTop'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description: 'Plataforma de cuidado em saúde inclusiva',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={nunito.variable}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            <Container as={'main'}>{children}</Container>
            <ScrollToTop />
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
