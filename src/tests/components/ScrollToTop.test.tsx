import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/shared/styles/theme'
import { ScrollToTop } from '@/shared/components/ScrollToTop'

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('ScrollToTop', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    window.scrollTo = jest.fn()
  })

  it('Button ScrollToTop is not rendered when scrollY is 0', () => {
    renderWithTheme(<ScrollToTop />)
    expect(screen.queryByTestId('scroll-to-top')).not.toBeInTheDocument()
  })

  it('Render button when scrollY is greater than 250', () => {
    renderWithTheme(<ScrollToTop />)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 261, writable: true })
      fireEvent.scroll(window)
    })

    expect(screen.getByTestId('scroll-to-top')).toBeInTheDocument()
  })

  it('Has an accessible aria-label', () => {
    renderWithTheme(<ScrollToTop />)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 285, writable: true })
      fireEvent.scroll(window)
    })

    expect(
      screen.getByLabelText('Voltar ao topo da página'),
    ).toBeInTheDocument()
  })

  it('Call scrollTo with behavior smooth on click', async () => {
    renderWithTheme(<ScrollToTop />)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 301, writable: true })
      fireEvent.scroll(window)
    })

    await userEvent.click(screen.getByTestId('scroll-to-top'))
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
