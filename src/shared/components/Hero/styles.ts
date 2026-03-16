import styled from 'styled-components'
import { media } from '@/shared/styles/media'
import { typography } from '@/shared/utils/typography'

export const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.color.background.default};
  padding: ${({ theme }) => theme.space.stack.lg} 0;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.stack.md};

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

export const TextContainer = styled.div`
  flex: 1;
  text-align: center;

  ${media.tablet`
    text-align: left;
  `}
`

export const Title = styled.h1`
  ${typography('headline-xl')};
  color: ${({ theme }) => theme.color.text.accent};
  margin-bottom: ${({ theme }) => theme.space.stack.sm};
`

export const Subtitle = styled.p`
  ${typography('headline-sm')};
  color: ${({ theme }) => theme.color.text.disabled};
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  ${media.tablet`
    justify-content: flex-end;
  `}

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`
