'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [btn1Hovered, setBtn1Hovered] = useState(false)
  const [btn2Hovered, setBtn2Hovered] = useState(false)

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
            <a
              href="#entities"
              onMouseEnter={() => setBtn1Hovered(true)}
              onMouseLeave={() => setBtn1Hovered(false)}
              style={{
                background: btn1Hovered ? '#fff' : '#000',
                color: btn1Hovered ? '#000' : '#fff',
                border: btn1Hovered ? '1px solid #000' : '1px solid #000',
                padding:'14px 32px',
                fontFamily:'var(--font-sg)',
                fontWeight:600,
                fontSize:'15px',
                textDecoration:'none',
                transition:'background 0.2s, color 0.2s',
                display:'inline-block',
              }}
            >The Entities</a>
            <a
              href="#contact"
              onMouseEnter={() => setBtn2Hovered(true)}
              onMouseLeave={() => setBtn2Hovered(false)}
              style={{
                background: btn2Hovered ? '#000' : '#fff',
                color: btn2Hovered ? '#fff' : '#000',
                border:'1px solid #000',
                padding:'14px 32px',
                fontFamily:'var(--font-sg)',
                fontWeight:600,
                fontSize:'15px',
                textDecoration:'none',
                transition:'background 0.2s, color 0.2s',
                display:'inline-block',
              }}
            >Get in touch</a>
          </motion.div>
          <motion.div variants={staggerContainer} style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0',borderTop:'1px solid #E5E5E5',paddingTop:'40px' }}>
            <motion.div variants={fadeUp} style={{ paddingRight:'24px',borderRight:'1px solid #E5E5E5',marginRight:'24px' }}>
              <div style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'28px',color:'#000',marginBottom:'4px' }}>
                {inView ? <CountUp end={4} duration={1.2} /> : '0'}
              </div>
              <div style={{ fontSize:'13px',color:'#888' }}>entities</div>
            </motion.div>
            <motion.div variants={fadeUp} style={{ paddingRight:'24px',borderRight:'1px solid #E5E5E5',marginRight:'24px' }}>
              <div style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'28px',color:'#000',marginBottom:'4px' }}>
                {inView ? <CountUp end={1} duration={0.8} /> : '0'}
              </div>
              <div style={{ fontSize:'13px',color:'#888' }}>parent structure</div>
            </motion.div>
            <motion.div variants={fadeUp} style={{ paddingRight:'24px',borderRight:'1px solid #E5E5E5',marginRight:'24px' }}>
              <div style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'28px',color:'#000',marginBottom:'4px' }}>
                ${inView ? <CountUp end={0} duration={1} /> : '0'}
              </div>
              <div style={{ fontSize:'13px',color:'#888' }}>external debt</div>
            </motion.div>
            <motion.div variants={fadeUp} style={{ paddingRight:'24px' }}>
              <div style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'28px',color:'#000',marginBottom:'4px' }}>
                {inView ? <CountUp end={100} duration={1.5} suffix="%" /> : '0%'}
              </div>
              <div style={{ fontSize:'13px',color:'#888' }}>owner-built</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
