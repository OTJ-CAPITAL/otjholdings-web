'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const entities = [
  {
    tag: 'PARENT',
    title: 'OTJ Holdings',
    domain: 'otjholdings.com',
    body: 'The legal entity that owns everything. Makes governance decisions, manages legal structure, and controls how capital is allocated across subsidiaries.',
    link: null,
    statusBadge: 'PARENT',
    detail: 'OTJ Holdings is the apex governance entity. It holds equity in OTJ Capital, OTJ App, and OTJ Fellowship. Legal decisions, fund structure, and cross-subsidiary capital allocation all route through Holdings. No external investors — Holdings is the source of authority, not a fund vehicle.',
  },
  {
    tag: 'TRADING ENGINE',
    title: 'OTJ Capital',
    domain: 'otjcapital.com',
    body: 'The AI quantitative fund. Runs automated trading strategies across crypto and African equity markets 24 hours a day.',
    link: 'https://otjcapital.com',
    statusBadge: 'LIVE',
    detail: 'OTJ Capital is the flagship AI quant fund, executing systematic strategies on Binance Futures and OANDA FX. All signals are generated algorithmically — no discretionary trades. Investors get real-time exposure reports via OTJ App. The track record started APR 2026.',
  },
  {
    tag: 'TRANSPARENCY LAYER',
    title: 'OTJ App',
    domain: 'otj.app',
    body: 'The investor dashboard. Real-time view of every position, trade, signal, and return. If you cannot see it, you should not trust it.',
    link: 'https://otj.app',
    statusBadge: 'LIVE',
    detail: 'OTJ App is the investor-facing transparency layer. Every open position, closed trade, signal trigger, and cumulative return is visible in real time. It exists because trust in a quant fund requires full visibility — not quarterly letters.',
  },
  {
    tag: 'TALENT ENGINE',
    title: 'OTJ Fellowship',
    domain: 'otjfellowship.com',
    body: 'The human layer. Selects and trains exceptional people from Africa to build the quantitative models that run the fund.',
    link: 'https://otjfellowship.com',
    statusBadge: 'COHORT 1 OPEN',
    detail: 'OTJ Fellowship identifies and trains Africa\'s most rigorous quantitative thinkers. Fellows build and maintain the models that run OTJ Capital. Cohort 1 selection is open now — applicants are assessed on mathematical reasoning, programming depth, and intellectual honesty.',
  },
]

function EntityCard({ entity, index, isActive, onClick }: {
  entity: typeof entities[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '40px 32px',
        border: '1px solid #E5E5E5',
        marginLeft: index > 0 ? '-1px' : '0',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        boxShadow: isActive ? '0 0 0 2px #000' : 'none',
        zIndex: isActive ? 2 : hovered ? 1 : 0,
        transition: 'box-shadow 0.15s ease',
        overflow: 'hidden',
      }}
    >
      {/* Left border slide-in */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered || isActive ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: '#000',
          transformOrigin: 'left',
        }}
      />

      {/* Tag pill */}
      <motion.span
        animate={hovered || isActive
          ? { background: '#000', color: '#fff', borderColor: '#000' }
          : { background: 'transparent', color: '#888', borderColor: '#E5E5E5' }
        }
        transition={{ duration: 0.15 }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '2px',
          border: '1px solid',
          padding: '3px 8px',
          width: 'fit-content',
          marginBottom: '20px',
        }}
      >
        {entity.tag}
      </motion.span>

      <h3 style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '20px', color: '#000', marginBottom: '4px' }}>
        {entity.title}
      </h3>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#888', marginBottom: '16px' }}>
        {entity.domain}
      </div>

      <motion.p
        animate={{ color: hovered || isActive ? '#333' : '#555' }}
        transition={{ duration: 0.15 }}
        style={{ fontSize: '14px', lineHeight: 1.7, flex: 1, marginBottom: '24px' }}
      >
        {entity.body}
      </motion.p>

      {/* Visit link fades in on hover */}
      {entity.link ? (
        <motion.a
          href={entity.link}
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered || isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: '13px', color: '#000', fontFamily: 'var(--font-sg)', fontWeight: 600 }}
        >
          → Visit {entity.domain}
        </motion.a>
      ) : (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered || isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: '13px', color: '#555', fontFamily: 'var(--font-sg)', fontWeight: 600 }}
        >
          → This site
        </motion.span>
      )}
    </motion.div>
  )
}

export default function Entities() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [activeEntity, setActiveEntity] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setActiveEntity(prev => prev === index ? null : index)
  }

  const active = activeEntity !== null ? entities[activeEntity] : null

  return (
    <section id="entities" ref={ref} style={{ padding: '120px 32px', background: '#F5F5F5', borderBottom: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#888', marginBottom: '16px' }}>THE STRUCTURE</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(28px,4vw,48px)', color: '#000', letterSpacing: '-1px', marginBottom: '64px' }}>What OTJ Holdings owns.</motion.h2>

          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '0' }}>
            {entities.map((e, i) => (
              <EntityCard
                key={i}
                entity={e}
                index={i}
                isActive={activeEntity === i}
                onClick={() => handleCardClick(i)}
              />
            ))}
          </motion.div>

          {/* Quick-look panel */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={activeEntity}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{
                  marginTop: '0',
                  border: '1px solid #E5E5E5',
                  borderTop: '2px solid #000',
                  background: '#fff',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '20px', color: '#000', margin: 0 }}>
                    {active.title}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', color: '#fff', background: '#000', padding: '3px 8px' }}>
                    {active.statusBadge}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#888' }}>
                    {active.domain}
                  </span>
                </div>
                <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.75, maxWidth: '720px', margin: 0 }}>
                  {active.detail}
                </p>
                {active.link && (
                  <a
                    href={active.link}
                    style={{ fontSize: '14px', color: '#000', fontFamily: 'var(--font-sg)', fontWeight: 600, width: 'fit-content' }}
                  >
                    Visit {active.domain} →
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
