import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Ayanda Kopano Gatsha',
  description:
    'Explore the story, mission, and system behind Ayanda’s work — from journalism to full-stack platforms like AdminHub. Built with real experience, remote discipline, and founder capital.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero / Origin */}
      <section className="py-24 bg-gradient-to-br from-[#0f172a] to-[#1a1f36] text-white text-center px-6">
        <div className="container max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold">📍 My Story</h1>
          <p className="text-white/80">
            I’m Ayanda Kopano Gatsha — a full-stack developer, journalist, and digital systems builder
            with over a decade of remote experience. I founded AdminHub from the ground up using
            real-world client income, no external investors, and a remote-first mindset.
          </p>
          <p className="text-white/80">
            Over <strong>BWP 549,792.47</strong> has been reinvested into building my platform — not just
            as a business, but as a scalable, mission-driven toolset for digital creators and
            entrepreneurs.
          </p>
        </div>
      </section>

      {/* Methodology / Process */}
      <section className="py-20 bg-[#0f172a] text-[#E2E8F0]">
        <div className="container max-w-4xl mx-auto space-y-14 px-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">🧠 How I Build</h2>
            <p className="text-white/80">
              Every project I touch is powered by a custom-built Next.js + Firebase base, enriched with
              AI tools and real client feedback. You’ll never get a cookie-cutter build — I tailor, test,
              and deliver with hands-on code and design.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">🔐 Secure Login Systems</h2>
            <p className="text-white/80">
              AdminHub includes private access for every client, with hidden login routes, session-based
              auth, and protected dashboards to review progress and message my team in real-time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">📈 Lifecycle Flow</h2>
            <ul className="list-disc list-inside text-white/80 mt-2 space-y-2">
              <li>✅ Intake form submitted</li>
              <li>⚙️ Site preview built in under 5 days</li>
              <li>🔑 Client logs in to give feedback</li>
              <li>🚀 Launch + optional monthly support begins</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">🧾 Capital-Funded, Not Hype-Funded</h2>
            <p className="text-white/80">
              Everything I’ve built has been funded by work. From journalism in Canada to SaaS support
              across the UK, every dollar earned was reinvested into tools, hosting, design, and code.
              That’s why AdminHub is real, formalized, and working — not a prototype.
            </p>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="py-20 bg-[#1a1f36] text-white">
        <div className="container max-w-4xl mx-auto px-6 space-y-14">
          <div>
            <h2 className="text-2xl font-bold mb-3">✅ Trusted & Validated</h2>
            <p className="text-white/80 mb-4">
              The work behind AdminHub has been reviewed or supported by:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>📌 <strong>LEA Botswana</strong> — endorsed my work in YDF planning</li>
              <li>📌 <strong>SBAB</strong> — recognized platform readiness for SME scale</li>
              <li>📌 <strong>Nexus Chartered Accountants</strong> — formalized capital report</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">🎯 Personal Mission</h2>
            <p className="text-white/80">
              I’m building not just sites — but **pathways**. AdminHub is a tool for African founders,
              small teams, freelancers, and agencies to go live fast, grow affordably, and stay supported.
            </p>
          </div>
        </div>
      </section>

      {/* 🌱 Sustainability */}
      <section className="py-20 bg-[#0f172a] text-white text-center px-6">
        <div className="container max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">🌱 A Cleaner Web Is Possible</h2>
          <p className="text-white/80">
            My site emits just <strong>0.06g of CO₂</strong> per view — and I use the Website Carbon
            Calculator on every client site too.
          </p>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto text-white/70 space-y-2">
            <li>🟢 Renewable Vercel hosting</li>
            <li>⚙️ Optimized Next.js and TailwindCSS setup</li>
            <li>📦 Lightweight assets and AI-enhanced code reviews</li>
          </ul>
          <a
            href="https://www.websitecarbon.com/website/adhubmvp-vercel-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-[#62A3E3] underline font-semibold"
          >
            🔍 View My Website Carbon Report →
          </a>
        </div>
      </section>
    </>
  );
}
