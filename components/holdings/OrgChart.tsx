'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const nodes = [
  {
    id: 'holdings',
    label: 'OTJ Holdings',
    description: 'The parent entity. Governs all subsidiaries. Controls capital allocation.',
  },
  {
    id: 'capital',
    label: 'OTJ Capital',
    description: 'AI quant fund. Live trading. Crypto + African FX.',
  },
  {
    id: 'app',
    label: 'OTJ App',
    description: 'Investor dashboard. Real-time positions and signals.',
  },
  {
    id: 'fellowship',
    label: 'OTJ Fellowship',
    description: "Talent engine. Trains Africa's quant builders.",
  },
]

export default function OrgChart() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const handleClick = (id: string) => {
    setActiveNode(prev => (prev === id ? null : id))
  }

  const activeDescription = nodes.find(n => n.id === activeNode)?.description

  return (
    <section
      ref={ref}
      style={{
        background: '#F5F5F5',
        padding: '120px 32px',
        borderBottom: '1px solid #E5E5E5',
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <motion.div
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '2px',
            color: '#888',
            marginBottom: '16px',
          }}
        >
          GROUP STRUCTURE
        </motion.div>
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sg)',
            fontWeight: 800,
            fontSize: 'clamp(28px,4vw,48px)',
            color: '#000',
            letterSpacing: '-1px',
            marginBottom: '64px',
          }}
        >
          How it connects.
        </motion.h2>

        <motion.div variants={fadeUp}>
          {/* Org chart container */}
          <div style={{ position: 'relative', minHeight: '280px' }}>
            {/* SVG lines */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'visible',
              }}
              aria-hidden="true"
            >
              {/* Line from holdings to capital: center to ~16.6% */}
              <line x1="50%" y1="60px" x2="16.66%" y2="180px" stroke="#000" strokeWidth="1" />
              {/* Line from holdings to app: center to center */}
              <line x1="50%" y1="60px" x2="50%" y2="180px" stroke="#000" strokeWidth="1" />
              {/* Line from holdings to fellowship: center to ~83.3% */}
              <line x1="50%" y1="60px" x2="83.33%" y2="180px" stroke="#000" strokeWidth="1" />
            </svg>

            {/* Holdings box — top center */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            >
              <button
                onClick={() => handleClick('holdings')}
                style={{
                  border: '1px solid #000',
                  padding: '16px 24px',
                  background: '#000',
                  color: '#fff',
                  cursor: 'pointer',
                  minWidth: '160px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-sg)',
                  fontWeight: 700,
                  fontSize: '14px',
                  boxShadow: activeNode === 'holdings' ? '0 0 0 2px #000, 0 0 0 4px #fff' : 'none',
                  transition: 'box-shadow 0.2s',
                }}
              >
                OTJ Holdings
              </button>
            </div>

            {/* Child boxes row */}
            <div
              style={{
                position: 'absolute',
                top: '180px',
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                zIndex: 1,
              }}
            >
              {(['capital', 'app', 'fellowship'] as const).map(id => {
                const node = nodes.find(n => n.id === id)!
                return (
                  <button
                    key={id}
                    onClick={() => handleClick(id)}
                    style={{
                      flex: 1,
                      border: '1px solid #000',
                      padding: '16px 24px',
                      background: '#fff',
                      color: '#000',
                      cursor: 'pointer',
                      minWidth: '160px',
                      textAlign: 'center',
                      fontFamily: 'var(--font-sg)',
                      fontWeight: 600,
                      fontSize: '14px',
                      boxShadow: activeNode === id ? '0 0 0 2px #000' : 'none',
                      transition: 'box-shadow 0.2s',
                    }}
                  >
                    {node.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tooltip popup */}
          {activeNode && activeDescription && (
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '24px',
                border: '1px solid #000',
                padding: '20px 24px',
                background: '#fff',
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                color: '#333',
                lineHeight: 1.6,
              }}
            >
              <span style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, color: '#000' }}>
                {nodes.find(n => n.id === activeNode)?.label}
              </span>
              <span style={{ color: '#888', margin: '0 8px' }}>—</span>
              {activeDescription}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
