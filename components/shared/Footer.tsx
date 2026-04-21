export default function Footer() {
  const ecosystemLinks = [
    { label: 'otjholdings.com', href: 'https://otjholdings.com' },
    { label: 'otjcapital.com', href: 'https://otjcapital.com' },
    { label: 'otjfellowship.com', href: 'https://otjfellowship.com' },
    { label: 'otj.app', href: 'https://otj.app' },
  ]

  return (
    <footer style={{ background: '#080808', color: '#FFFFFF' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 24px 32px',
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Left: Wordmark */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                letterSpacing: '2px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              OTJ HOLDINGS
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: '#666666',
                lineHeight: '1.6',
              }}
            >
              Nairobi, Kenya<br />Est. 2026
            </div>
          </div>

          {/* Middle: Ecosystem */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '3px',
                color: '#C9A84C',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              ECOSYSTEM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ecosystemLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: '#999999',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = '#FFFFFF')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = '#999999')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '3px',
                color: '#C9A84C',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              CONTACT
            </div>
            <a
              href="mailto:hello@otjholdings.com"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#999999',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = '#C9A84C')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = '#999999')}
            >
              hello@otjholdings.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#1A1A1A', marginBottom: '24px' }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#555555',
            }}
          >
            &copy; 2026 OTJ Holdings. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#444444',
            }}
          >
            Nairobi, Kenya
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
