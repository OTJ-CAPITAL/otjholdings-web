'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const metrics = [
  { val: '4', label: 'Under governance', sub: 'entities' },
  { val: '1', label: 'Across all bodies', sub: 'vision' },
  { val: 'Mauritius', label: 'Fund domicile', sub: '' },
  { val: '2026', label: 'Year founded', sub: '' },
]

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section ref={ref} style={{ background: '#FAFAFA', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px 32px 80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '4px', marginBottom: '32px' }}>NAIROBI, KENYA — EST. 2026</motion.div>
          <motion.h1 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(48px, 7vw, 80px)', color: '#080808', lineHeight: 1.05, marginBottom: '32px' }}>
            The Parent<br />Structure.
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontFamily: 'Inter', fontSize: '20px', color: '#666666', maxWidth: '540px', lineHeight: 1.7, marginBottom: '32px' }}>
            The legal and structural foundation that owns, governs, and protects the entire OTJ ecosystem. Every entity. Every decision. Every dollar.
          </motion.p>
          {/* Gold rule */}
          <motion.div variants={fadeUp} style={{ width: '60px', height: '1px', background: '#C9A84C', marginBottom: '48px' }} />
          {/* CTAs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', marginBottom: '64px', flexWrap: 'wrap' }}>
            <a href="#entities" style={{ background: '#080808', color: '#FFFFFF', padding: '14px 32px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>Our Entities →</a>
            <a href="#roadmap" style={{ border: '1px solid #080808', color: '#080808', padding: '14px 32px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', textDecoration: 'none', borderRadius: '2px' }}>Learn More</a>
          </motion.div>
          {/* Metrics */}
          <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', maxWidth: '640px', paddingTop: '40px', borderTop: '1px solid #E0E0E0' }}>
            {metrics.map((m, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '28px', color: '#080808', marginBottom: '4px' }}>{m.val}</div>
                <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#888888' }}>{m.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
