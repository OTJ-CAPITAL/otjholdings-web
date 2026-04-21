import Navigation from '@/components/shared/Navigation'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/holdings/Hero'
import Entities from '@/components/holdings/Entities'
import Philosophy from '@/components/holdings/Philosophy'
import Roadmap from '@/components/holdings/Roadmap'
import Contact from '@/components/holdings/Contact'

export default function Home() {
  return (
    <main style={{ background: '#FAFAFA' }}>
      <Navigation />
      <Hero />
      <Entities />
      <Philosophy />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  )
}
