import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import Mission from '@/components/sections/Mission'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <Mission />
      <Footer />
    </main>
  )
}
