'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const inputBase: React.CSSProperties = {
  background: '#111',
  color: '#fff',
  border: '1px solid #333',
  padding: '12px 16px',
  width: '100%',
  fontFamily: 'var(--font-inter)',
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box',
  borderRadius: 0,
  appearance: 'none',
  WebkitAppearance: 'none',
}

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: 'Investment Inquiry', message: '' })
  const [hoverBtn, setHoverBtn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focusedField === field ? '#fff' : '#333',
  })

  return (
    <section id="contact" ref={ref} style={{ padding: '120px 32px', background: '#000' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <motion.div variants={fadeUp} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '2px', color: '#555', marginBottom: '32px' }}>GET IN TOUCH</motion.div>
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-sg)', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '24px' }}>Investor. Partner.<br />Just curious.</motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize: '18px', color: '#888', lineHeight: 1.8, marginBottom: '40px' }}>We are not hard to reach. If you are serious, we will respond within 24 hours.</motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: '#fff', letterSpacing: '0.5px' }}
          >
            Message sent. We&apos;ll respond within 24 hours.
          </motion.div>
        ) : (
          <motion.form variants={fadeUp} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={e => handleChange('name', e.target.value)}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                style={focusStyle('name')}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={focusStyle('email')}
              />
            </div>

            <select
              value={form.subject}
              onChange={e => handleChange('subject', e.target.value)}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              style={{
                ...focusStyle('subject'),
                cursor: 'pointer',
                color: '#fff',
              }}
            >
              {['Investment Inquiry', 'Partnership', 'Media', 'Other'].map(opt => (
                <option key={opt} value={opt} style={{ background: '#111', color: '#fff' }}>{opt}</option>
              ))}
            </select>

            <textarea
              placeholder="Message"
              required
              rows={4}
              value={form.message}
              onChange={e => handleChange('message', e.target.value)}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              style={{ ...focusStyle('message'), resize: 'vertical' }}
            />

            <button
              type="submit"
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              style={{
                background: hoverBtn ? '#fff' : 'transparent',
                color: hoverBtn ? '#000' : '#fff',
                border: '1px solid #fff',
                padding: '14px 32px',
                fontFamily: 'var(--font-sg)',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                width: 'fit-content',
                transition: 'background 0.15s ease, color 0.15s ease',
                letterSpacing: '0.5px',
              }}
            >
              Send Message →
            </button>
          </motion.form>
        )}
      </motion.div>
    </section>
  )
}
