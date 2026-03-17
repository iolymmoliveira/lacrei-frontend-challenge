'use client'

import { useState, useEffect } from 'react'
import { ScrollButton } from './styles'
import { ArrowUp } from '@/shared/components/Icons'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <ScrollButton
      onClick={handleClick}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      data-testid="scroll-to-top"
    >
      <ArrowUp />
    </ScrollButton>
  )
}
