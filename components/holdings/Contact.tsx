'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section id="contact" ref={ref} style={{ background: '#080808', padding: '120px 32px' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 52px)', color: '#FFFFFF', marginBottom: '24px' }}>Ready to talk?</motion.h2>
        <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '18px', color: '#888888', marginBottom: '40px', lineHeight: 1.7 }}>
          Whether you are an investor, a prospective Fellow, or a strategic partner.
        </motion.p>
        <motion.a variants={fadeUp} href="mailto:hello@otjholdings.com" style={{ fontFamily: 'Space Grotesk', fontSize: '18px', color: '#C9A84C', textDecoration: 'none', letterSpacing: '0.5px' }}>
          hello@otjholdings.com →
        </motion.a>
      </motion.div>
    </section>
  )
}
