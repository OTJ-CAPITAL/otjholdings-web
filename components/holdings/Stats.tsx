'use client'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const stats = [
  { prefix: '$', end: 0, suffix: '', label: 'External debt', duration: 1 },
  { prefix: '', end: 4, suffix: '', label: 'Operating entities', duration: 1.2 },
  { prefix: '', end: 100, suffix: '%', label: 'Owner-built', duration: 1.5 },
  { prefix: '', end: 1, suffix: '', label: 'Governing structure', duration: 0.8 },
  { prefix: '', end: 3, suffix: '', label: 'Revenue streams', duration: 1.2 },
  { prefix: '', end: 2026, suffix: '', label: 'Year founded', duration: 1.8 },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        padding: '80px 32px',
        borderBottom: '1px solid #E5E5E5',
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {stats.map((stat, i) => {
            const isLastRow = i >= 3
            const isLastInRow = (i + 1) % 3 === 0
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  padding: '40px 32px',
                  borderRight: isLastInRow ? 'none' : '1px solid #E5E5E5',
                  borderBottom: isLastRow ? 'none' : '1px solid #E5E5E5',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sg)',
                    fontWeight: 800,
                    fontSize: 'clamp(40px, 5vw, 72px)',
                    color: '#000',
                    lineHeight: 1,
                    marginBottom: '12px',
                    letterSpacing: '-2px',
                  }}
                >
                  {stat.prefix}
                  {inView ? (
                    <CountUp
                      end={stat.end}
                      duration={stat.duration}
                      suffix={stat.suffix}
                      startOnMount={false}
                      start={0}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: '#888',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
