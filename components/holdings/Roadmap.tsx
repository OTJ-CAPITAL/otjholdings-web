'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const milestones = [
  { date:'APR 2026', title:'Light the fire.', desc:'Holdings structured. Trading system live. First capital deployed. Track record begins.' },
  { date:'JUL 2026', title:'First outside capital.', desc:'90-day auditable returns. Institutional conversations begin. $1M AUM target.' },
  { date:'SEP 2026', title:'Expand the machine.', desc:'African equity strategies deployed. Fellowship Cohort 1 operational.' },
  { date:'DEC 2026', title:'Plant the flag.', desc:'$10M AUM. OTJ Capital public. The proof of concept becomes the product.' },
]

export default function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="roadmap" ref={ref} style={{ padding:'120px 32px',background:'#F5F5F5',borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'800px',margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#888',marginBottom:'16px' }}>2026 ROADMAP</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(28px,4vw,48px)',color:'#000',letterSpacing:'-1px',marginBottom:'64px' }}>From zero to $10M in nine months.</motion.h2>
          <div style={{ position:'relative',paddingLeft:'32px' }}>
            <div style={{ position:'absolute',left:'7px',top:0,bottom:0,width:'1px',background:'#E5E5E5' }} />
            {milestones.map((m,i) => (
              <motion.div key={i} variants={fadeUp} style={{ position:'relative',paddingBottom:'48px' }}>
                <div style={{ position:'absolute',left:'-29px',top:'4px',width:'14px',height:'14px',border:'2px solid #000',background:'#fff' }} />
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'11px',color:'#888',marginBottom:'8px' }}>{m.date}</div>
                <h3 style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'20px',color:'#000',marginBottom:'8px' }}>{m.title}</h3>
                <p style={{ fontSize:'15px',color:'#555',lineHeight:1.7 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
