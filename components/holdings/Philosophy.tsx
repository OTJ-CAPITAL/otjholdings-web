'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'

export default function Philosophy() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <section ref={ref} style={{ background: '#F0F0F0', padding: '96px 32px' }}>
      <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <blockquote style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', color: '#080808', lineHeight: 1.5, marginBottom: '24px' }}>
          "Capital should go where growth is real.<br />Not where relationships are comfortable."
        </blockquote>
        <cite style={{ fontFamily: 'Inter', fontSize: '14px', color: '#888888', fontStyle: 'normal' }}>— OTJ Holdings, Core Philosophy</cite>
      </motion.div>
    </section>
  )
}
