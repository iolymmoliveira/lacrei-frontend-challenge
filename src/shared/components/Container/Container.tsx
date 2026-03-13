'use client'

import { StyledContainer } from './styles'
import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  as?: React.ElementType
}

export function Container({ children, as }: ContainerProps) {
  return <StyledContainer as={as}>{children}</StyledContainer>
}
