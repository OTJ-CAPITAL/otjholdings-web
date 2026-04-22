'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section ref={ref} style={{ minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',padding:'100px 32px 80px',borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'900px',margin:'0 auto',width:'100%' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#888',marginBottom:'32px' }}>OTJ HOLDINGS — PARENT COMPANY</motion.div>
          <motion.h1 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(40px,6vw,80px)',color:'#000',lineHeight:1.05,letterSpacing:'-2px',marginBottom:'32px' }}>
            One company.<br />Four machines.
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize:'20px',color:'#444',maxWidth:'560px',lineHeight:1.7,marginBottom:'48px' }}>
            OTJ Holdings is the legal and structural foundation that owns OTJ Capital, OTJ App, and OTJ Fellowship. It governs how capital moves, how decisions are made, and how the system expands.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display:'flex',gap:'16px',marginBottom:'80px' }}>
            <a href="#entities" style={{ background:'#000',color:'#fff',padding:'14px 32px',fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'15px' }}>The Entities</a>
            <a href="#contact" style={{ border:'1px solid #000',color:'#000',padding:'14px 32px',fontFamily:'var(--font-sg)',fontWeight:600,fontSize:'15px' }}>Get in touch</a>
          </motion.div>
          <motion.div variants={staggerContainer} style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0',borderTop:'1px solid #E5E5E5',paddingTop:'40px' }}>
            {[['4','entities'],['1','parent structure'],['$0','external debt'],['100%','owner-built']].map(([v,l],i) => (
              <motion.div key={i} variants={fadeUp} style={{ paddingRight:'24px',borderRight:i<3?'1px solid #E5E5E5':'none',marginRight:i<3?'24px':'0' }}>
                <div style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'28px',color:'#000',marginBottom:'4px' }}>{v}</div>
                <div style={{ fontSize:'13px',color:'#888' }}>{l}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
