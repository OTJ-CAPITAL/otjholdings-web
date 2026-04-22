'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'

export default function Philosophy() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section ref={ref} style={{ padding:'96px 32px',borderBottom:'1px solid #E5E5E5' }}>
      <motion.div variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} style={{ maxWidth:'800px',margin:'0 auto' }}>
        <p style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(24px,3vw,40px)',color:'#000',lineHeight:1.4,letterSpacing:'-1px',borderLeft:'4px solid #000',paddingLeft:'32px' }}>
          &ldquo;Capital should go where growth is real. Not where relationships are comfortable.&rdquo;
        </p>
        <p style={{ fontFamily:'var(--font-inter)',fontSize:'14px',color:'#888',marginTop:'24px',paddingLeft:'36px' }}>— OTJ Holdings, Core Principle</p>
      </motion.div>
    </section>
  )
}
