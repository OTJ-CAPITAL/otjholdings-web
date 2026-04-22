'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const entities = [
  { tag:'PARENT', title:'OTJ Holdings', domain:'otjholdings.com', body:'The legal entity that owns everything. Makes governance decisions, manages legal structure, and controls how capital is allocated across subsidiaries.', link: null },
  { tag:'TRADING ENGINE', title:'OTJ Capital', domain:'otjcapital.com', body:'The AI quantitative fund. Runs automated trading strategies across crypto and African equity markets 24 hours a day.', link:'https://otjcapital.com' },
  { tag:'TRANSPARENCY LAYER', title:'OTJ App', domain:'otj.app', body:'The investor dashboard. Real-time view of every position, trade, signal, and return. If you cannot see it, you should not trust it.', link:'https://otj.app' },
  { tag:'TALENT ENGINE', title:'OTJ Fellowship', domain:'otjfellowship.com', body:'The human layer. Selects and trains exceptional people from Africa to build the quantitative models that run the fund.', link:'https://otjfellowship.com' },
]

export default function Entities() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="entities" ref={ref} style={{ padding:'120px 32px',background:'#F5F5F5',borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px',margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'2px',color:'#888',marginBottom:'16px' }}>THE STRUCTURE</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)',fontWeight:800,fontSize:'clamp(28px,4vw,48px)',color:'#000',letterSpacing:'-1px',marginBottom:'64px' }}>What OTJ Holdings owns.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'0' }}>
            {entities.map((e,i) => (
              <motion.div key={i} variants={fadeUp} style={{ padding:'40px 32px',border:'1px solid #E5E5E5',marginLeft:i>0?'-1px':'0',background:'#fff',display:'flex',flexDirection:'column' }}>
                <span style={{ fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'2px',color:'#888',border:'1px solid #E5E5E5',padding:'3px 8px',width:'fit-content',marginBottom:'20px' }}>{e.tag}</span>
                <h3 style={{ fontFamily:'var(--font-sg)',fontWeight:700,fontSize:'20px',color:'#000',marginBottom:'4px' }}>{e.title}</h3>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'12px',color:'#888',marginBottom:'16px' }}>{e.domain}</div>
                <p style={{ fontSize:'14px',color:'#555',lineHeight:1.7,flex:1,marginBottom:'24px' }}>{e.body}</p>
                {e.link ? <a href={e.link} style={{ fontSize:'13px',color:'#000',fontFamily:'var(--font-sg)',fontWeight:600 }}>Visit site →</a> : <span style={{ fontSize:'13px',color:'#BBB' }}>This site</span>}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
