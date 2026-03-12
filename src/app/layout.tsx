import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/shared/styles/theme'
import { GlobalStyle } from '@/shared/styles/GlobalStyle'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description: 'Plataforma de cuidado em saúde inclusiva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
