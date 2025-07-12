import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects – Ayanda Kopano Gatsha',
  description:
    'Explore platform features, frameworks, and tools built by Ayanda — including AdminHub, custom CRM, real-time dashboards, and multilingual tools.',
};

export default function ProjectsPage() {
  const systems = [
    {
      title: 'AdminHub Platform (MVP)',
      desc: 'A real-time client delivery system with project dashboards, file uploads, messaging, and multilingual support — built with Next.js, Firebase, Tailwind, and UploadThing.',
      link: 'https://adhubmvp.vercel.app/',
    },
    {
      title: 'Custom CRM for Marketing Teams',
      desc: 'Built a CRM with lead, contact, and note management, user assignment, global + per-user storage, and PDF export tools. Full admin overview and session-based auth.',
      link: '/admin/marketing-overview',
    },
    {
      title: 'Multilingual Blog System (KR/EN)',
      desc: 'Blog reader and admin panel with automatic runtime translations, full blog CRUD, and SEO-optimized dynamic routes.',
      link: '/blog',
    },
    {
      title: 'Client Messaging System',
      desc: 'Built secure per-project messaging between clients and admin with real-time Firestore updates and UploadThing file support.',
      link: '/client/project/[id]',
    },
    {
      title: 'E-commerce PWA Demo',
      desc: 'Installable frontend app with mock store logic, used for training and onboarding clients. Built for mobile-first demos.',
      link: 'https://texaspapa.vercel.app/',
    },
    {
      title: 'Odin Portfolio (Offline-Ready)',
      desc: 'Service worker-enhanced PWA featuring code examples, dev tools, and project showcase with manifest and offline support.',
      link: '/odin',
    },
  ];

  return (
    <section className="py-24 bg-[#0f172a] text-white px-6">
      <div className="container mx-auto max-w-5xl text-center space-y-8">
        <h1 className="text-4xl font-bold">🧠 Personal Projects & Systems</h1>
        <p className="text-white/80 max-w-xl mx-auto">
          These are the platforms, tools, and features I’ve personally built — either for clients, my agency, or to enhance my developer workflow.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 text-left pt-6">
          {systems.map(({ title, desc, link }) => (
            <div
              key={title}
              className="bg-[#1a1f36] p-6 rounded-xl border border-white/10 hover:border-[#62A3E3] transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-[#62A3E3]">{title}</h3>
              <p className="text-sm text-white/80 mb-3">{desc}</p>
              <a
                href={link}
                target={link.startsWith('http') ? '_blank' : undefined}
                rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-block text-sm text-[#5A4FFF] font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
