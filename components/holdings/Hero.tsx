'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const metrics = [
  { value: 4, suffix: '', label: 'entities', sublabel: 'Under governance' },
  { value: 1, suffix: '', label: 'vision', sublabel: 'Across all bodies' },
  { value: null, label: 'Mauritius', sublabel: 'Fund domicile' },
  { value: 2026, suffix: '', label: '', sublabel: 'Year founded' },
]

function MetricItem({ metric, inView }: { metric: typeof metrics[0]; inView: boolean }) {
  return (
    <div
      style={{
        flex: '1',
        minWidth: '140px',
        padding: '28px 24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: '32px',
          color: '#080808',
          lineHeight: 1,
          marginBottom: '6px',
        }}
      >
        {metric.value !== null ? (
          inView ? (
            <CountUp
              end={metric.value}
              duration={1.8}
              separator=","
              useEasing
            />
          ) : (
            '0'
          )
        ) : (
          metric.label
        )}
        {metric.suffix}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px',
          color: '#888888',
          marginTop: '4px',
        }}
      >
        {metric.value !== null ? metric.label && (
          <span style={{ color: '#444444', fontWeight: 500, marginRight: '4px' }}>{metric.label}</span>
        ) : null}
        {metric.sublabel}
      </div>
    </div>
  )
}

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section
      style={{
        background: '#FAFAFA',
        paddingTop: '140px',
        paddingBottom: '0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Location label */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '10px',
            letterSpacing: '4px',
            color: '#C9A84C',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          NAIROBI, KENYA — EST. 2026
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 80px)',
            lineHeight: 1.05,
            color: '#080808',
            letterSpacing: '-1px',
            marginBottom: '28px',
          }}
        >
          The Parent<br />Structure.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: 1.6,
            color: '#666666',
            maxWidth: '540px',
            marginBottom: '32px',
          }}
        >
          The legal and structural foundation that owns, governs, and protects the entire OTJ ecosystem. Every entity. Every decision. Every dollar.
        </p>

        {/* Gold rule */}
        <div
          style={{
            width: '60px',
            height: '1px',
            background: '#C9A84C',
            marginBottom: '40px',
          }}
        />

        {/* CTA Row */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '80px' }}>
          <a
            href="#entities"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              color: '#FFFFFF',
              background: '#080808',
              padding: '13px 28px',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.3px',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.background = '#222222')}
            onMouseLeave={e => ((e.target as HTMLElement).style.background = '#080808')}
          >
            Our Entities →
          </a>
          <a
            href="#roadmap"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              color: '#080808',
              background: 'transparent',
              border: '1.5px solid #080808',
              padding: '13px 28px',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.3px',
              transition: 'background 0.2s, color 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              const el = e.target as HTMLElement
              el.style.background = '#080808'
              el.style.color = '#FFFFFF'
            }}
            onMouseLeave={e => {
              const el = e.target as HTMLElement
              el.style.background = 'transparent'
              el.style.color = '#080808'
            }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Metric Strip */}
      <div
        ref={ref}
        style={{
          borderTop: '1px solid #E0E0E0',
          background: '#FAFAFA',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {metrics.map((metric, i) => (
            <div
              key={i}
              style={{
                flex: '1',
                minWidth: '140px',
                borderRight: i < metrics.length - 1 ? '1px solid #E0E0E0' : 'none',
              }}
            >
              <MetricItem metric={metric} inView={inView} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .metric-strip > div {
            border-right: none !important;
            border-bottom: 1px solid #E0E0E0;
          }
        }
      `}</style>
    </section>
  )
}
