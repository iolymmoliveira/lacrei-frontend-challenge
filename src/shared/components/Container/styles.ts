import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopSm}) {
    padding: 0;
  }
`
