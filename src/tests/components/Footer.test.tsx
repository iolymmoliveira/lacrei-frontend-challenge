import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/shared/styles/theme'
import { Footer } from '@/shared/components/Footer'

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

describe('Footer', () => {
  it('Render element footer', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('Render social media links', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByTestId('footer-link-linkedin')).toBeInTheDocument()
    expect(screen.getByTestId('footer-link-github')).toBeInTheDocument()
  })

  it('Social media links have descriptive aria-labels', () => {
    renderWithTheme(<Footer />)
    expect(
      screen.getByLabelText(
        'Ícone de redirecionamento para o LinkedIn do desenvolvedor(a)',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(
        'Ícone de redirecionamento para o GitHub do desenvolvedor(a)',
      ),
    ).toBeInTheDocument()
  })

  it('Social media links open in a new tab', () => {
    renderWithTheme(<Footer />)
    const linkedin = screen.getByTestId('footer-link-linkedin')
    const github = screen.getByTestId('footer-link-github')
    expect(linkedin).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('target', '_blank')
  })

  it('Render copyright text', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByText(/Ioly Oliveira/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Todos os direitos reservados/i),
    ).toBeInTheDocument()
  })
})
