import styled from 'styled-components'
import { typography } from '@/shared/utils/typography'

export const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.space.inline.md} 0;
  border-top: 1px solid ${({ theme }) => theme.color.border.divider};
  margin-top: auto;
  color: ${({ theme }) => theme.color.text.accent};
`

export const IconsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.inline.sm};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  ${typography('text-sm')};
  display: flex;
  flex-direction: column;
  align-items: end;
`

export const Paragraph = styled.p`
  ${typography('text-base-high200')}
`
