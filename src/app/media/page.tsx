'use client';

import Link from 'next/link';

export default function MediaPage() {
  const mediaItems = [
    {
      title: 'A Guide to Adulting: University Edition',
      type: 'Article',
      emoji: '📖',
      link: 'https://theotherpress.ca/study-now-summer-later/',
    },
    {
      title: 'Interview with Eric Wilkins (Editor in Chief)',
      type: 'Video Interview',
      emoji: '🎙️',
      link: 'https://youtu.be/5jUVm3ZdLGQ?si=-ngb38wWCE_RmCoE',
    },
    {
      title: 'Herding Dogs Training (Botswana)',
      type: 'Training Documentary',
      emoji: '🐕‍🦺',
      link: 'https://youtu.be/vuSVWHrOI_U?si=vxVsHn3HE9GcPdkX',
    },
    {
      title: 'Sherlock Holmes Trailer (Douglas Theatre)',
      type: 'Independent Videography',
      emoji: '🎬',
      link: 'https://youtu.be/SSe9Gv7d0MI?si=PVX0dmjU3asvLLaI',
    },
    {
      title: 'Why the Money in Your Pocket Is Outdated',
      type: 'Article',
      emoji: '📰',
      link: 'https://theotherpress.ca/why-the-money-in-your-pocket-is-as-outdated-as-religion/',
    },
    {
      title: 'Royals Sidestep Chargers',
      type: 'Sports Journalism',
      emoji: '🏀',
      link: 'https://theotherpress.ca/royals-sidestep-chargers/',
    },
  ];

  return (
    <section className="py-20 bg-[#0f172a] text-[#f1f5f9] px-6">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-white">🎥 Journalism & Media Highlights</h1>
        <p className="text-base text-white/80 max-w-xl mx-auto">
          A cross-continental body of work featuring published articles, video interviews, and hands-on production.
        </p>

        <div className="grid gap-6 text-left pt-10">
          {mediaItems.map(({ title, type, link, emoji }) => (
            <div
              key={title}
              className="bg-[#1e293b] border border-white/10 p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-sm font-bold text-[#62A3E3] uppercase mb-1">{type}</p>
              <h3 className="text-lg font-bold text-white mb-2">
                {emoji} {title}
              </h3>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#C5A100] hover:underline"
              >
                View →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
