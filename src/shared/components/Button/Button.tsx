'use client'

import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: React.ReactNode
  children?: React.ReactNode
  testId?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  testId,
  type = 'button',
  'aria-label': ariaLabel,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      data-testid={testId}
      aria-label={
        ariaLabel ?? (typeof children === 'string' ? children : undefined)
      }
      {...rest}
    >
      {icon && (
        <span className="btn-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {children && <span className="btn-label">{children}</span>}
    </StyledButton>
  )
}
