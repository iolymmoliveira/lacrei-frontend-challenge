import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/shared/styles/theme'
import { NavLink } from '@/shared/components/NavLink'

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string
    children: React.ReactNode
  }) => <a href={href}>{children}</a>,
}))

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('NavLink', () => {
  it('renders the link correctly', () => {
    renderWithTheme(<NavLink href="/ajuda">Ajuda</NavLink>)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('renders the correct text', () => {
    renderWithTheme(<NavLink href="/ajuda">Ajuda</NavLink>)
    expect(screen.getByText('Ajuda')).toBeInTheDocument()
  })

  it('points to the correct href', () => {
    renderWithTheme(<NavLink href="/quem-somos">Quem somos</NavLink>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/quem-somos')
  })

  it('renders with the correct accessible role', () => {
    renderWithTheme(<NavLink href="/ajuda">Ajuda</NavLink>)
    expect(screen.getByRole('link', { name: 'Ajuda' })).toHaveAttribute(
      'href',
      '/ajuda',
    )
  })

  it('renders children correctly', () => {
    renderWithTheme(
      <NavLink href="/ajuda">
        <span data-testid="child">Ajuda</span>
      </NavLink>,
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
