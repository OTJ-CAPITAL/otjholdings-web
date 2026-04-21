export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: '#080808',
        padding: '96px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 52px)',
            color: '#FFFFFF',
            letterSpacing: '-0.5px',
            marginBottom: '20px',
          }}
        >
          Ready to talk?
        </h2>

        {/* Body */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.6,
            color: '#888888',
            maxWidth: '520px',
            marginBottom: '40px',
          }}
        >
          Whether you are an investor, a prospective Fellow, or a strategic partner.
        </p>

        {/* Email */}
        <a
          href="mailto:hello@otjholdings.com"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '20px',
            color: '#C9A84C',
            textDecoration: 'none',
            letterSpacing: '0.3px',
            transition: 'color 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = '#E8C96A')}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = '#C9A84C')}
        >
          hello@otjholdings.com
        </a>
      </div>
    </section>
  )
}
