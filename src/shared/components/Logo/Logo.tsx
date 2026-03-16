import Image from 'next/image'
import Link from 'next/link'
import { LogoWrapper, LogoImage, Stamp } from './styles'

interface LogoProps {
  src?: string
  alt?: string
  text?: string
  href?: string
  size?: number
  showIconOnMobile?: boolean
}

export function Logo({
  src = '/favicon.svg',
  alt = 'Lacrei Saúde Logo',
  text = 'Lacrei Saúde',
  href = '/',
  size = 35,
  showIconOnMobile = false,
}: LogoProps) {
  const content = (
    <LogoWrapper>
      <LogoImage $showIconOnMobile={showIconOnMobile}>
        <Image src={src} alt={alt} width={size} height={size} />
      </LogoImage>

      <Stamp>{text}</Stamp>
    </LogoWrapper>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
