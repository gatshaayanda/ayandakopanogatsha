export default function Footer() {
  return (
    <footer className="bg-[#1a1f36] text-[#cbd5e1] mt-12 shadow-inner">
      <div className="text-center text-xs mb-4">
        🌍 Powered sustainably. This portfolio emits only <strong>0.06g CO₂</strong> per view.{' '}
        <a
          href="https://www.websitecarbon.com/website/adhubmvp-vercel-app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#62A3E3]"
        >
          Verified by Website Carbon
        </a>
      </div>
      <div className="container px-4 py-6 text-center text-sm space-y-1">
        <p>&copy; {new Date().getFullYear()} Ayanda Kopano Gatsha. All rights reserved.</p>
        <p className="opacity-90">
          Full-stack portfolio — built with Next.js, TailwindCSS, Firebase, and love.
        </p>
      </div>
    </footer>
  );
}
