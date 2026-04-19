export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[#444] text-sm tracking-[0.3em] uppercase mb-8">Nairobi, Kenya</p>
        <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-none tracking-tighter text-white">
          OTJ<br />HOLDINGS
        </h1>
        <div className="mt-8 max-w-xl">
          <p className="text-[#888] text-xl leading-relaxed">
            The parent company behind OTJ Capital, OTJ App, and OTJ Fellowship. We are building Africa's financial infrastructure — from the fund to the platform to the talent.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] border-t border-[#1a1a1a] pt-px">
          {[
            { name: 'OTJ Capital',   desc: 'AI quantitative hedge fund',   href: 'https://otjcapital.com' },
            { name: 'OTJ App',       desc: 'Real-time investor platform',  href: 'https://otj.app' },
            { name: 'OTJ Fellowship',desc: 'Building African quant talent', href: 'https://otjfellowship.com' },
          ].map((co) => (
            <a key={co.name} href={co.href} className="group bg-black p-8 hover:bg-[#0a0a0a] transition-colors">
              <p className="text-white font-bold text-lg group-hover:underline">{co.name} →</p>
              <p className="text-[#444] text-sm mt-1">{co.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
