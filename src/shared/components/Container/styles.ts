import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
  }
`
