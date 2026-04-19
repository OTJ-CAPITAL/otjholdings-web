const companies = [
  {
    name: 'OTJ Capital',
    url: 'otjcapital.com',
    type: 'Finance',
    description: 'An AI-native quantitative hedge fund deploying systematic trading strategies across crypto markets. Targeting $100M AUM by 2028.',
  },
  {
    name: 'OTJ App',
    url: 'otj.app',
    type: 'Technology',
    description: 'The investor portal for OTJ Capital. Real-time portfolio visibility, AI signal feed, live market intelligence, and full trade transparency.',
  },
  {
    name: 'OTJ Fellowship',
    url: 'otjfellowship.com',
    type: 'Education',
    description: 'A fellowship program developing the next generation of African quantitative researchers, engineers, and fund managers.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#444] text-xs tracking-[0.3em] uppercase mb-6">Portfolio</p>
        <h2 className="text-5xl font-black text-white mb-16">Our companies.</h2>
        <div className="space-y-px bg-[#1a1a1a]">
          {companies.map((c) => (
            <div key={c.name} className="bg-black p-10 grid md:grid-cols-3 gap-8 items-start">
              <div>
                <span className="text-xs text-[#444] tracking-widest uppercase">{c.type}</span>
                <h3 className="text-2xl font-black text-white mt-2">{c.name}</h3>
                <p className="text-[#444] text-sm mt-1">{c.url}</p>
              </div>
              <p className="text-[#666] leading-relaxed md:col-span-2">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
