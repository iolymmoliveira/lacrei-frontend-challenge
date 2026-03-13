'use client'

import { StyledContainer } from './styles'
import { ReactNode, ElementType } from 'react'

type ContainerProps = {
  children: ReactNode
  as?: ElementType
}

export function Container({ children, as = 'div' }: ContainerProps) {
  return <StyledContainer as={as}>{children}</StyledContainer>
}
