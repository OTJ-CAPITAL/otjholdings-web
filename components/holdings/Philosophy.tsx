'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const principles = [
  {
    frontTitle: 'Transparency first.',
    frontQuote: 'If you cannot see it, you cannot trust it.',
    back: 'Every trade OTJ Capital makes is visible in OTJ App. Every investor sees the same data in real time. No selective reporting.',
  },
  {
    frontTitle: 'Systems over people.',
    frontQuote: 'The AI does not have bad days.',
    back: 'Human discretion is the primary source of trading errors. We remove it. The system executes what the model says, within the limits the risk manager set.',
  },
  {
    frontTitle: 'Africa is the edge.',
    frontQuote: 'Everyone else is looking at saturated markets.',
    back: 'The quantitative infrastructure that transformed Wall Street in the 1990s has never been applied to African markets. That gap is our advantage.',
  },
]

function PrincipleCard({ principle }: { principle: typeof principles[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid #E5E5E5',
        padding: '0',
        minHeight: '180px',
        position: 'relative',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      {/* Front face */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '40px 32px',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-sg)',
            fontWeight: 700,
            fontSize: '17px',
            color: '#000',
            marginBottom: '12px',
          }}
        >
          {principle.frontTitle}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            color: '#666',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}
        >
          &ldquo;{principle.frontQuote}&rdquo;
        </div>
      </div>

      {/* Back face */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '40px 32px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            color: '#ccc',
            lineHeight: 1.7,
          }}
        >
          {principle.back}
        </div>
      </div>
    </div>
  )
}

export default function Philosophy() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })

  return (
    <section ref={ref} style={{ padding: '96px 32px', borderBottom: '1px solid #E5E5E5' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        {/* Blockquote */}
        <motion.div variants={fadeUp} style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <p
            style={{
              fontFamily: 'var(--font-sg)',
              fontWeight: 800,
              fontSize: 'clamp(24px,3vw,40px)',
              color: '#000',
              lineHeight: 1.4,
              letterSpacing: '-1px',
              borderLeft: '4px solid #000',
              paddingLeft: '32px',
            }}
          >
            &ldquo;Capital should go where growth is real. Not where relationships are comfortable.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              color: '#888',
              marginTop: '24px',
              paddingLeft: '36px',
            }}
          >
            — OTJ Holdings, Core Principle
          </p>
        </motion.div>

        {/* Principle cards */}
        <motion.div
          variants={fadeUp}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {principles.map((p, i) => (
            <PrincipleCard key={i} principle={p} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
