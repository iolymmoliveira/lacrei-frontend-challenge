'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Section,
  Content,
  TextWrap,
  Title,
  Subtitle,
  Actions,
  StyledButton,
  ImageWrap,
} from './styles'

type Cta = { href: string; label: string; ariaLabel?: string }

interface NotFoundHeroProps {
  title: string
  subtitle: string
  primaryCta: Cta
  secondaryCta?: Cta
  imageSrc?: string
  imageAlt?: string
}

export const NotFoundHero: React.FC<NotFoundHeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc = '/images/notfound.webp',
  imageAlt = 'Ilustração de página não encontrada',
}) => {
  return (
    <Section aria-labelledby="not-found-title">
      <Content>
        <TextWrap>
          <Title id="not-found-title">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Actions>
            <StyledButton
              as={Link}
              href={primaryCta.href}
              $variant="primary"
              aria-label={primaryCta.ariaLabel ?? primaryCta.label}
            >
              {primaryCta.label}
            </StyledButton>
            {secondaryCta && (
              <StyledButton
                as={Link}
                href={secondaryCta.href}
                $variant="secondary"
                aria-label={secondaryCta.ariaLabel ?? secondaryCta.label}
              >
                {secondaryCta.label}
              </StyledButton>
            )}
          </Actions>
        </TextWrap>
        <ImageWrap>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={480}
            height={360}
            sizes="(min-width: 720px) 40vw, 80vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </ImageWrap>
      </Content>
    </Section>
  )
}
