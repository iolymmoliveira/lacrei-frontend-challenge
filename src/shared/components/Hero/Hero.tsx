'use client'

import React from 'react'
import Image from 'next/image'
import {
  HeroSection,
  HeroContent,
  TextContainer,
  Title,
  Subtitle,
  ImageContainer,
} from './styles'

interface HeroProps {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  priority?: boolean
  sizes?: string
  testId?: string
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  priority = false,
  sizes = '(min-width: 720px) 50vw, 100vw',
  testId,
}) => {
  return (
    <HeroSection aria-labelledby="hero-title" data-testid={testId}>
      <HeroContent>
        <TextContainer>
          <Title id="hero-title">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
        <ImageContainer>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={300}
            priority={priority}
            sizes={sizes}
            style={{ width: '100%', height: 'auto' }}
          />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  )
}
