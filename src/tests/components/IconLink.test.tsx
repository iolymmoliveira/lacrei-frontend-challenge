import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/shared/styles/theme'
import { IconLink } from '@/shared/components/IconLink'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('IconLink', () => {
  const defaultProps = {
    href: 'https://linkedin.com',
    label: 'Ícone de redirecionamento para o LinkedIn do desenvolvedor(a)',
    icon: <svg data-testid="icon" />,
  }

  it(' renders the link correctly', () => {
    renderWithTheme(<IconLink {...defaultProps} />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('has a descriptive aria-label', () => {
    renderWithTheme(<IconLink {...defaultProps} />)
    expect(
      screen.getByLabelText(
        'Ícone de redirecionamento para o LinkedIn do desenvolvedor(a)',
      ),
    ).toBeInTheDocument()
  })

  it('points to the correct href', () => {
    renderWithTheme(<IconLink {...defaultProps} />)
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })

  it(' opens in a new tab with target _blank', () => {
    renderWithTheme(<IconLink {...defaultProps} />)
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
  })

  it('has rel="noopener noreferrer" for security', () => {
    renderWithTheme(<IconLink {...defaultProps} />)
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    )
  })

  it('renders the icon inside the link', () => {
    renderWithTheme(<IconLink {...defaultProps} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders with data-testid when testId is provided', () => {
    renderWithTheme(<IconLink {...defaultProps} testId="icon-linkedin" />)
    expect(screen.getByTestId('icon-linkedin')).toBeInTheDocument()
  })
})
