'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navLinks = [
    { label: 'Entities', href: '#entities' },
    { label: 'Roadmap', href: '#roadmap' },
  ]

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.2s',
        padding: '0 32px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'var(--font-sg)', fontWeight: 700, fontSize: '16px', letterSpacing: '-0.5px' }}>
          OTJ Holdings
        </span>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navLinks.map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', color: '#555', textDecoration: 'none' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{ background: '#000', color: '#fff', padding: '8px 18px', fontSize: '14px', fontFamily: 'var(--font-sg)', fontWeight: 600, textDecoration: 'none' }}
            >
              Contact
            </a>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              fontFamily: 'var(--font-sg)',
              color: '#000',
              padding: '4px 8px',
              lineHeight: 1,
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: '#fff',
              borderBottom: '1px solid #E5E5E5',
              padding: '24px 32px',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {navLinks.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', color: '#333', textDecoration: 'none' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              style={{ fontFamily: 'var(--font-sg)', fontWeight: 600, fontSize: '16px', color: '#000', textDecoration: 'none' }}
            >
              Contact →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
