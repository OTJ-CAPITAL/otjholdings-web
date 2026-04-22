'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const entities = [
  { tag: 'PARENT', title: 'OTJ Holdings', domain: 'otjholdings.com', body: 'The parent. The legal fortress. Owns and governs every entity within the OTJ ecosystem.', link: null },
  { tag: 'TRADING ENGINE', title: 'OTJ Capital', domain: 'otjcapital.com', body: 'The AI engine. Quantitative. Fully automated investment execution across crypto and emerging markets.', link: 'https://otjcapital.com' },
  { tag: 'TALENT ENGINE', title: 'OTJ Fellowship', domain: 'otjfellowship.com', body: 'The human layer. Where exceptional talent is groomed to build, govern, and evolve the AI system.', link: 'https://otjfellowship.com' },
  { tag: 'TRANSPARENCY', title: 'OTJ App', domain: 'otj.app', body: 'The interface. Real-time performance. Full portfolio visibility. Investor transparency at scale.', link: 'https://otj.app' },
]

export default function Entities() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section id="entities" ref={ref} style={{ background: '#FAFAFA', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontSize: '10px', color: '#C9A84C', letterSpacing: '3px', marginBottom: '16px' }}>THE ECOSYSTEM</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', color: '#080808', marginBottom: '64px' }}>Four bodies. One machine.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {entities.map((e, i) => (
              <motion.div key={i} variants={fadeUp} style={{ background: '#FFFFFF', border: '1px solid #E0E0E0', padding: '40px 32px', borderRadius: '4px', transition: 'border-color 0.2s', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={ev => (ev.currentTarget.style.borderColor = '#C9A84C')}
                onMouseLeave={ev => (ev.currentTarget.style.borderColor = '#E0E0E0')}>
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '10px', letterSpacing: '2px', color: '#C9A84C', background: 'rgba(201,168,76,0.1)', padding: '4px 10px', borderRadius: '2px', width: 'fit-content', marginBottom: '20px' }}>{e.tag}</span>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '20px', color: '#080808', marginBottom: '6px' }}>{e.title}</h3>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#888888', marginBottom: '16px' }}>{e.domain}</div>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#444444', lineHeight: 1.7, flex: 1, marginBottom: '24px' }}>{e.body}</p>
                {e.link ? (
                  <a href={e.link} style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: '#C9A84C', textDecoration: 'none' }}>→ Explore</a>
                ) : (
                  <span style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: '#CCCCCC' }}>→ {e.domain}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
