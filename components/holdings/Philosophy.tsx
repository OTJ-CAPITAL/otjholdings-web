export default function Philosophy() {
  return (
    <section
      style={{
        background: '#F0F0F0',
        padding: '96px 24px',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Quote mark */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '48px',
            color: '#C9A84C',
            lineHeight: 1,
            marginBottom: '8px',
            opacity: 0.6,
          }}
        >
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            lineHeight: 1.35,
            color: '#080808',
            letterSpacing: '-0.3px',
            marginBottom: '32px',
          }}
        >
          Capital should go where growth is real.
          <br />
          Not where relationships are comfortable.
        </blockquote>

        {/* Attribution */}
        <cite
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            color: '#888888',
            fontStyle: 'normal',
          }}
        >
          — OTJ Holdings, Core Philosophy
        </cite>
      </div>
    </section>
  )
}
