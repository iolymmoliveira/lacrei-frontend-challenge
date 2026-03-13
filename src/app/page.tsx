import { Container } from '@/shared/components/Container'
import { Header } from '@/shared/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Welcome to Lacrei Saúde!</h1>
      </Container>
    </>
  )
}
export const revalidate = 0
