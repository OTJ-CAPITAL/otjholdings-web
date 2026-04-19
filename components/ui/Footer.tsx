export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-white font-bold text-lg tracking-widest">OTJ HOLDINGS</p>
          <p className="text-[#444] text-sm mt-1">Nairobi, Kenya</p>
        </div>
        <div className="flex gap-12 text-sm text-[#444]">
          <div className="flex flex-col gap-2">
            <p className="text-white text-xs tracking-widest uppercase mb-1">Companies</p>
            <a href="https://otjcapital.com" className="hover:text-white transition-colors">OTJ Capital</a>
            <a href="https://otj.app" className="hover:text-white transition-colors">OTJ App</a>
            <a href="https://otjfellowship.com" className="hover:text-white transition-colors">OTJ Fellowship</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#111] text-[#333] text-xs">
        © {new Date().getFullYear()} OTJ Holdings. All rights reserved.
      </div>
    </footer>
  )
}
