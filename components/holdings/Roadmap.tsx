'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const milestones = [
  {
    date: 'APR 2026',
    title: 'Light the fire.',
    desc: 'Holdings structured. Trading system live. First capital deployed. Track record begins.',
    detail: 'Trading system is live on Binance Futures. OANDA FX paper trading begins. OTJ App in beta with 10 investor observers.',
  },
  {
    date: 'JUL 2026',
    title: 'First outside capital.',
    desc: '90-day auditable returns. Institutional conversations begin. $1M AUM target.',
    detail: 'Fellowship Cohort 1 selection begins. First institutional deck sent to 3 family offices in Lagos and Johannesburg.',
  },
  {
    date: 'SEP 2026',
    title: 'Expand the machine.',
    desc: 'African equity strategies deployed. Fellowship Cohort 1 operational.',
    detail: 'Cohort 1 onboarded. African equity paper trading on NGX begins. OTJ App goes public.',
  },
  {
    date: 'DEC 2026',
    title: 'Plant the flag.',
    desc: '$10M AUM. OTJ Capital public. The proof of concept becomes the product.',
    detail: 'Fund makes public performance claim. Apply for regulatory recognition in Nigeria and South Africa.',
  },
]

export default function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [openMilestone, setOpenMilestone] = useState<number>(0)

  return (
    <section id="roadmap" ref={ref} style={{ padding: '120px 32px', background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '16px' }}>2026 ROADMAP</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px,4vw,48px)', color: '#000', letterSpacing: '-1px', marginBottom: '64px' }}>From zero to $10M in nine months.</motion.h2>

          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            {/* Animated progress line */}
            <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: '1px', background: '#E5E5E5' }} />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: inView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              style={{
                position: 'absolute',
                left: '7px',
                top: 0,
                bottom: 0,
                width: '1px',
                background: '#000',
                transformOrigin: 'top',
              }}
            />

            {milestones.map((m, i) => (
              <motion.div key={i} variants={fadeUp} style={{ position: 'relative', paddingBottom: '48px' }}>
                {/* Clickable dot */}
                <motion.div
                  onClick={() => setOpenMilestone(prev => prev === i ? -1 : i)}
                  animate={{ background: openMilestone === i ? '#000' : '#fff' }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    left: '-29px',
                    top: '4px',
                    width: '14px',
                    height: '14px',
                    border: '2px solid #000',
                    cursor: 'pointer',
                    zIndex: 1,
                  }}
                />

                <div
                  onClick={() => setOpenMilestone(prev => prev === i ? -1 : i)}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888', marginBottom: '8px' }}>{m.date}</div>
                  <h3 style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '20px', color: '#000', marginBottom: '8px' }}>{m.title}</h3>
                  <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                </div>

                {/* Expandable detail block */}
                <AnimatePresence initial={false}>
                  {openMilestone === i && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        marginTop: '16px',
                        padding: '16px 20px',
                        background: '#fff',
                        borderLeft: '3px solid #000',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '14px',
                        color: '#444',
                        lineHeight: 1.75,
                      }}>
                        {m.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
