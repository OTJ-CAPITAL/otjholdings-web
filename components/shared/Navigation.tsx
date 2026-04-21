'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#FFFFFF',
        borderBottom: '1px solid #E0E0E0',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '2px',
              color: '#080808',
              textTransform: 'uppercase',
            }}
          >
            OTJ HOLDINGS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
        >
          <a
            href="#entities"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              color: '#444444',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = '#080808')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = '#444444')}
          >
            Entities
          </a>
          <a
            href="#roadmap"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              color: '#444444',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = '#080808')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = '#444444')}
          >
            Roadmap
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              color: '#444444',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = '#080808')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = '#444444')}
          >
            Contact
          </a>

          <a
            href="#contact"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '13px',
              color: '#FFFFFF',
              background: '#080808',
              padding: '9px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.5px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.background = '#222222')}
            onMouseLeave={e => ((e.target as HTMLElement).style.background = '#080808')}
          >
            Enquire →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#080808' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#080808' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#080808' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: '#FFFFFF',
            borderTop: '1px solid #E0E0E0',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {['#entities', '#roadmap', '#contact'].map(href => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '15px',
                color: '#444444',
                textDecoration: 'none',
                textTransform: 'capitalize',
              }}
            >
              {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '13px',
              color: '#FFFFFF',
              background: '#080808',
              padding: '10px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Enquire →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
