'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Briefcase, Code, FileText } from 'lucide-react';
import ProjectUpdates from '@/components/ProjectUpdates';


export default function HomePage() {
  const [greeting, setGreeting] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening');
    setEmoji(hour < 12 ? '🌅' : hour < 18 ? '🌤️' : '🌙');
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#0f172a] to-[#1a1f36] text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight drop-shadow-xl">
          {greeting} {emoji}, I’m Ayanda Kopano Gatsha
        </h1>
        <p className="text-lg max-w-2xl mb-8 text-white/80">
          Full-Stack Developer & Automation Specialist. I build fast, scalable digital systems using a
          custom tech stack backed by 10+ years of remote work experience.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/projects"
            className="btn-primary bg-[#5A4FFF] hover:bg-[#62A3E3] text-white px-6 py-2 rounded-full font-semibold"
          >
            🚀 View My Work
          </Link>
          <Link
            href="/cv.pdf"
            className="btn-primary bg-[#62A3E3] hover:bg-[#5A4FFF] text-white px-6 py-2 rounded-full font-semibold"
          >
            📄 Download CV
          </Link>
          <Link
            href="/contact"
            className="btn-primary border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0f172a] transition"
          >
            ✉️ Let’s Connect
          </Link>
        </div>
      </section>

      {/* About + Skills */}
      <section className="py-20 bg-[#0f172a] text-white text-center px-6">
        <div className="container max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">👋 About Me</h2>
          <p className="text-white/80">
            I’ve built AdminHub from the ground up, helped 400+ global businesses through remote support roles, and specialize in scalable web platforms with built-in automation and analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {['Next.js', 'Supabase', 'Firebase', 'TailwindCSS', 'Node.js', 'TypeScript', 'GitHub', 'Excel'].map(skill => (
              <span key={skill} className="bg-[#1e293b] text-[#E5E8F0] px-4 py-1.5 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-[#1a1f36] text-white text-center px-6">
        <div className="container max-w-4xl mx-auto grid gap-12 sm:grid-cols-3">
          {[
            {
              title: 'AdminHub',
              icon: <Code size={36} />,
              desc: 'Multilingual, real-time, CRM-backed delivery platform.',
            },
            {
              title: 'CommissionCrowd',
              icon: <Briefcase size={36} />,
              desc: '9 years of remote SaaS experience, 400+ B2B clients supported.',
            },
            {
              title: 'Media + Journalism',
              icon: <FileText size={36} />,
              desc: 'Published in Canadian + Botswana publications. Archived work online.',
            },
          ].map(({ title, icon, desc }) => (
            <div key={title} className="bg-[#0f172a] rounded-xl shadow-md p-6 space-y-4 hover:shadow-lg transition">
              <div className="text-[#62A3E3]">{icon}</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

<ProjectUpdates />


      {/* CTA */}
      <section className="py-20 bg-[#0f172a] text-white text-center px-6">
        <div className="container max-w-xl mx-auto space-y-4">
          <h2 className="text-xl font-bold">📬 Interested in working together?</h2>
          <p className="text-white/80">Let’s build something impactful together — whether it’s your site, a SaaS, or something completely new.</p>
          <Link
            href="/contact"
            className="bg-[#e4f1ff] text-[#0f172a] px-6 py-3 rounded-full font-semibold hover:bg-[#bab5ff]"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
