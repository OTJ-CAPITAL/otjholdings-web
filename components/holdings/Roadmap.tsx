'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const milestones = [
  {
    date: 'APR 2026',
    title: 'Light The Fire',
    description: 'Holdings structured. System live. $1,000 deployed. Track record begins.',
    isFinal: false,
  },
  {
    date: 'JUL 2026',
    title: 'First Million',
    description: '90-day auditable track record. First outside capital secured. $1M AUM.',
    isFinal: false,
  },
  {
    date: 'SEP 2026',
    title: 'Go Institutional',
    description: 'Emerging markets strategy deployed. Fellowship Cohort 1 operational.',
    isFinal: false,
  },
  {
    date: 'DEC 2026',
    title: 'Plant The Flag',
    description: '$10,000,000 AUM achieved. The next chapter starts.',
    isFinal: true,
  },
]

function MilestoneItem({
  milestone,
  index,
  isLast,
}: {
  milestone: typeof milestones[0]
  index: number
  isLast: boolean
}) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{
        display: 'flex',
        gap: '32px',
        position: 'relative',
      }}
    >
      {/* Left: dot + line */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          width: '20px',
        }}
      >
        {/* Dot */}
        <div
          style={{
            width: milestone.isFinal ? '16px' : '12px',
            height: milestone.isFinal ? '16px' : '12px',
            borderRadius: '50%',
            background: '#C9A84C',
            flexShrink: 0,
            marginTop: '4px',
            boxShadow: milestone.isFinal ? '0 0 0 4px rgba(201,168,76,0.15)' : 'none',
          }}
        />
        {/* Connecting line */}
        {!isLast && (
          <div
            style={{
              width: '1px',
              flexGrow: 1,
              background: '#C9A84C',
              opacity: 0.4,
              marginTop: '8px',
              minHeight: '48px',
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingBottom: isLast ? '0' : '48px' }}>
        {/* Date */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '3px',
            color: '#C9A84C',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          {milestone.date}
        </div>
        {/* Title */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            color: '#080808',
            marginBottom: '8px',
            letterSpacing: '-0.2px',
          }}
        >
          {milestone.title}
        </div>
        {/* Description */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            lineHeight: 1.65,
            color: '#666666',
            maxWidth: '480px',
          }}
        >
          {milestone.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      style={{
        background: '#FAFAFA',
        padding: '96px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Label */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '4px',
            color: '#C9A84C',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          2026 ROADMAP
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 48px)',
            color: '#080808',
            letterSpacing: '-0.5px',
            marginBottom: '64px',
          }}
        >
          From $1K to $10M in nine months.
        </h2>

        {/* Timeline */}
        <div style={{ maxWidth: '600px' }}>
          {milestones.map((milestone, i) => (
            <MilestoneItem
              key={i}
              milestone={milestone}
              index={i}
              isLast={i === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
