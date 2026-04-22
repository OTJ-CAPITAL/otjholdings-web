'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const milestones = [
  { date: 'APR 2026', title: 'Light The Fire', desc: 'Holdings structured. System live. $1,000 deployed. Track record begins.' },
  { date: 'JUL 2026', title: 'First Million', desc: '90-day auditable track record. First outside capital secured. $1M AUM.' },
  { date: 'SEP 2026', title: 'Go Institutional', desc: 'Emerging markets strategy deployed. Fellowship Cohort 1 operational.' },
  { date: 'DEC 2026', title: 'Plant The Flag', desc: '$10,000,000 AUM achieved. The next chapter starts.', large: true },
]

export default function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="roadmap" ref={ref} style={{ background: '#FAFAFA', padding: '120px 32px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>2026 ROADMAP</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', color: '#080808', marginBottom: '64px' }}>From $1K to $10M in nine months.</motion.h2>
          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '2px', background: '#E0E0E0' }} />
            {milestones.map((m, i) => (
              <motion.div key={i} variants={fadeUp} style={{ position: 'relative', paddingBottom: '48px' }}>
                <div style={{ position: 'absolute', left: '-28px', top: '4px', width: m.large ? '18px' : '14px', height: m.large ? '18px' : '14px', borderRadius: '50%', background: '#C9A84C', border: '2px solid #C9A84C', boxShadow: '0 0 12px rgba(201,168,76,0.3)' }} />
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#C9A84C', marginBottom: '8px' }}>{m.date}</div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '20px', color: '#080808', marginBottom: '8px' }}>{m.title}</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '15px', color: '#888888', lineHeight: 1.7 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
