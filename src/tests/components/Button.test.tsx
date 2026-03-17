import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/shared/styles/theme'
import { Button } from '@/shared/components/Button'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('Button', () => {
  it('render text correctly', () => {
    renderWithTheme(<Button>Clique aqui</Button>)
    expect(screen.getByText('Clique aqui')).toBeInTheDocument()
  })

  it('render with aria-label when provided', () => {
    renderWithTheme(
      <Button aria-label="Navegar para a página Ajuda">Ajuda</Button>,
    )
    expect(
      screen.getByLabelText('Navegar para a página Ajuda'),
    ).toBeInTheDocument()
  })

  it('uses the text as aria-label when not provided', () => {
    renderWithTheme(<Button>Quem somos</Button>)
    expect(screen.getByLabelText('Quem somos')).toBeInTheDocument()
  })

  it('renders the icon with aria-hidden', () => {
    const icon = <svg data-testid="icon" />
    renderWithTheme(<Button icon={icon}>Ajuda</Button>)
    const iconWrapper = screen.getByTestId('icon').parentElement
    expect(iconWrapper).toHaveAttribute('aria-hidden', 'true')
  })

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn()
    renderWithTheme(<Button onClick={handleClick}>Clique</Button>)
    await userEvent.click(screen.getByText('Clique'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when it is disabled', async () => {
    const handleClick = jest.fn()
    renderWithTheme(
      <Button onClick={handleClick} disabled>
        Clique
      </Button>,
    )
    await userEvent.click(screen.getByText('Clique'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders with data-testid when testId is provided', () => {
    renderWithTheme(<Button testId="btn-ajuda">Ajuda</Button>)
    expect(screen.getByTestId('btn-ajuda')).toBeInTheDocument()
  })

  it('is disabled when disabled is true', () => {
    renderWithTheme(<Button disabled>Clique</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
