'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="contact" ref={ref} style={{ padding:'120px 32px',background:'#000' }}>
      <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'} style={{ maxWidth:'600px',margin:'0 auto' }}>
        <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#555',marginBottom:'32px' }}>GET IN TOUCH</motion.div>
        <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(36px,5vw,60px)',color:'#fff',letterSpacing:'-1.5px',lineHeight:1.1,marginBottom:'24px' }}>Investor. Partner.<br />Just curious.</motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize:'18px',color:'#888',lineHeight:1.8,marginBottom:'40px' }}>We are not hard to reach. If you are serious, we will respond within 24 hours.</motion.p>
        <motion.a variants={fadeUp} href="mailto:hello@otjholdings.com" style={{ display:'inline-block',background:'#fff',color:'#000',padding:'16px 40px',fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'16px' }}>hello@otjholdings.com →</motion.a>
      </motion.div>
    </section>
  )
}
