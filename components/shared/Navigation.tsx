'use client'
import { useState } from 'react'
export default function Navigation() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: '#FFFFFF', borderBottom: '1px solid #E0E0E0', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#080808', letterSpacing: '1px' }}>OTJ HOLDINGS</span>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {['Entities', 'Roadmap', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#888888', fontSize: '14px', textDecoration: 'none', fontFamily: 'Inter', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#080808')} onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>{item}</a>
        ))}
        <a href="#contact" style={{ background: '#080808', color: '#FFFFFF', padding: '10px 24px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', fontFamily: 'Space Grotesk', borderRadius: '2px' }}>Enquire →</a>
      </div>
    </nav>
  )
}
