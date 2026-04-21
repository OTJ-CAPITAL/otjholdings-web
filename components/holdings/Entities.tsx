'use client'

import { useState } from 'react'

type EntityCard = {
  tag: string
  tagColor: string
  title: string
  domain: string
  body: string
  footerText: string
  footerHref: string
  isCurrent?: boolean
}

const entities: EntityCard[] = [
  {
    tag: 'PARENT',
    tagColor: '#C9A84C',
    title: 'OTJ Holdings',
    domain: 'otjholdings.com',
    body: 'The parent. The legal fortress. Owns and governs every entity within the OTJ ecosystem.',
    footerText: '→ otjholdings.com',
    footerHref: 'https://otjholdings.com',
    isCurrent: true,
  },
  {
    tag: 'TRADING ENGINE',
    tagColor: '#080808',
    title: 'OTJ Capital',
    domain: 'otjcapital.com',
    body: 'The AI engine. Quantitative. Fully automated investment execution across crypto and emerging markets.',
    footerText: '→ Explore',
    footerHref: 'https://otjcapital.com',
  },
  {
    tag: 'TALENT ENGINE',
    tagColor: '#080808',
    title: 'OTJ Fellowship',
    domain: 'otjfellowship.com',
    body: 'The human layer. Where exceptional talent is groomed to build, govern, and evolve the AI systems.',
    footerText: '→ Explore',
    footerHref: 'https://otjfellowship.com',
  },
  {
    tag: 'TRANSPARENCY',
    tagColor: '#080808',
    title: 'OTJ App',
    domain: 'otj.app',
    body: 'The interface. Real-time performance. Full portfolio visibility. Investor transparency at scale.',
    footerText: '→ Explore',
    footerHref: 'https://otj.app',
  },
]

function EntityCard({ card }: { card: EntityCard }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FFFFFF',
        border: `1px solid ${hovered ? '#C9A84C' : '#E0E0E0'}`,
        borderRadius: '6px',
        padding: '32px',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: hovered ? '0 4px 20px rgba(201,168,76,0.08)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Tag */}
      <div>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '10px',
            letterSpacing: '2px',
            color: card.tagColor === '#C9A84C' ? '#080808' : '#FFFFFF',
            background: card.tagColor,
            padding: '4px 10px',
            borderRadius: '2px',
            textTransform: 'uppercase',
          }}
        >
          {card.tag}
        </span>
      </div>

      {/* Title + Domain */}
      <div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '20px',
            color: '#080808',
            marginBottom: '4px',
          }}
        >
          {card.title}
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            color: '#888888',
            letterSpacing: '0.3px',
          }}
        >
          {card.domain}
        </div>
      </div>

      {/* Body */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          lineHeight: 1.65,
          color: '#555555',
          flexGrow: 1,
        }}
      >
        {card.body}
      </p>

      {/* Footer link */}
      <div style={{ paddingTop: '8px', borderTop: '1px solid #F0F0F0' }}>
        {card.isCurrent ? (
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#AAAAAA',
              cursor: 'default',
            }}
          >
            {card.footerText}
          </span>
        ) : (
          <a
            href={card.footerHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '13px',
              color: hovered ? '#C9A84C' : '#080808',
              textDecoration: 'none',
              transition: 'color 0.2s',
              letterSpacing: '0.3px',
            }}
          >
            {card.footerText}
          </a>
        )}
      </div>
    </div>
  )
}

export default function Entities() {
  return (
    <section
      id="entities"
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
          THE ECOSYSTEM
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#080808',
            letterSpacing: '-0.5px',
            marginBottom: '56px',
          }}
        >
          Four bodies. One machine.
        </h2>

        {/* 2x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
          className="entities-grid"
        >
          {entities.map((card, i) => (
            <EntityCard key={i} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .entities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
