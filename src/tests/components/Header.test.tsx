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
  it('Render element header with navigation role', () => {
    renderWithTheme(<Header />)
    expect(
      screen.getByRole('navigation', { name: 'Navegação principal' }),
    ).toBeInTheDocument()
  })

  it('Render navigation buttons', () => {
    renderWithTheme(<Header />)
    expect(screen.getByTestId('nav-link-quem-somos')).toBeInTheDocument()
    expect(screen.getByTestId('nav-link-ajuda')).toBeInTheDocument()
  })

  it('Navigation buttons have descriptive aria-labels', () => {
    renderWithTheme(<Header />)
    expect(
      screen.getByLabelText('Navegar para a página Quem Somos'),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Navegar para a página Ajuda'),
    ).toBeInTheDocument()
  })

  it('Navigation button points to the /quem-somos route', () => {
    renderWithTheme(<Header />)
    const button = screen.getByTestId('nav-link-quem-somos')
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })
})
