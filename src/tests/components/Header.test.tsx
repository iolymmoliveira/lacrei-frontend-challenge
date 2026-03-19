import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/shared/styles/theme'
import { Header } from '@/shared/components/Header'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) => <a href={href}>{children}</a>,
}))

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('Header', () => {
  it('renders the navigation landmark', () => {
    renderWithTheme(<Header />)
    expect(
      screen.getByRole('navigation', { name: 'Navegação principal' }),
    ).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    renderWithTheme(<Header />)
    expect(screen.getByText('Quem somos')).toBeInTheDocument()
    expect(screen.getByText('Ajuda')).toBeInTheDocument()
  })

  it('navigation links have correct hrefs', () => {
    renderWithTheme(<Header />)
    expect(screen.getByText('Quem somos').closest('a')).toHaveAttribute(
      'href',
      '/quem-somos',
    )
    expect(screen.getByText('Ajuda').closest('a')).toHaveAttribute(
      'href',
      '/ajuda',
    )
  })

  it('renders the logo', () => {
    renderWithTheme(<Header />)
    expect(screen.getByAltText('Lacrei Saúde Logo')).toBeInTheDocument()
  })
})
