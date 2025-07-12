'use client';

import ProjectUpdates from '@/components/ProjectUpdates';



export default function AboutPage() {
  return (
    <>
      {/* Hero / Origin */}
      <section className="py-24 bg-gradient-to-br from-[#0f172a] to-[#1a1f36] text-white text-center px-6">
        <div className="container max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold">📍 My Story</h1>
          <p className="text-white/80">
            I’m Ayanda Kopano Gatsha — a full-stack developer, journalist, and digital systems builder with
            over a decade of remote-first experience. I founded AdminHub from the ground up using real client
            income, not investors — blending automation, clean UX, and global reach.
          </p>
          <p className="text-white/80">
            Over <strong>BWP 549,792.47</strong> has already been reinvested into platform development,
            domains, legal, hosting, and design — formalized and accounted for.
          </p>
        </div>
      </section>

      {/* Academic Background */}
      <section className="py-20 bg-[#0f172a] text-white px-6">
        <div className="container max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">🎓 Certified Across Continents</h2>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>📰 Certificate in New Media Journalism — Simon Fraser University, Canada</li>
              <li>🎥 Film + TV training — Douglas College and EduKick England (UK)</li>
              <li>📄 Reference letters from professors, editors, and employers from 2013–2024</li>
              <li>🎖️ My first publication was in Botswana newspapers while still in high school</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Build Philosophy */}
      <section className="py-20 bg-[#0f172a] text-[#E2E8F0] px-6">
        <div className="container max-w-4xl mx-auto space-y-14">
          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">🧠 How I Build</h2>
            <p className="text-white/80">
              I use a custom-built Firebase + Next.js + Tailwind base to build scalable, multilingual platforms with real-time updates, secure logins, and client-first flows. Every project is personal — no templates, no outsourcing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">🔐 Secure, Client-Centric</h2>
            <p className="text-white/80">
              AdminHub includes password-protected dashboards, real-time Firestore messaging,
              UploadThing support, and separate client/admin portals for full visibility and speed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">📈 My Process</h2>
            <ul className="list-disc list-inside text-white/80 mt-2 space-y-2">
              <li>✅ Intake form submitted</li>
              <li>⚙️ Preview site in 5 days</li>
              <li>🔑 Client logs in to give feedback</li>
              <li>🚀 Final delivery + optional monthly support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#62A3E3] mb-3">🧾 100% Bootstrapped</h2>
            <p className="text-white/80">
              My work is funded by real income — no venture capital, no gimmicks. Every tool,
              certificate, and design is paid for with client earnings — now formalized under Admin
              Hub (Pty) Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <section className="py-20 bg-[#1a1f36] text-white px-6">
        <div className="container max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-3">✅ Endorsed & Recognized</h2>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>📌 LEA Botswana — endorsed my YDF business plan</li>
              <li>📌 Nexus Chartered Accountants — formalized capital injection report</li>
              <li>📌 SBAB & CommissionCrowd — reviewed work quality and remote readiness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-[#0f172a] text-white text-center px-6">
        <div className="container max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">🌱 Sustainability Matters</h2>
          <p className="text-white/80">
            My site emits just <strong>0.06g of CO₂</strong> per view — verified by Website Carbon. I use Vercel’s renewable hosting for all clients and optimize every build.
          </p>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto text-white/70 space-y-2">
            <li>🟢 Green hosting (Vercel)</li>
            <li>⚡ Optimized Tailwind/Next.js structure</li>
            <li>🧠 AI-aided code review + build automation</li>
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

         <ProjectUpdates />
    </>
  );
}
