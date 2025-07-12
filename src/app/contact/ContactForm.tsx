'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success') === '1';

  return (
    <section className="py-24 bg-[#0f172a] text-white px-6">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">📬 Let’s Connect</h1>
        <p className="text-center text-white/80 mb-8">
          Whether it’s a client project, a collaboration, or a conversation — I’d love to hear from you.
        </p>

        {success && (
          <div className="bg-green-600/20 text-green-300 text-sm p-4 rounded mb-6 text-center font-medium">
            ✅ Thanks! Your message has been received.
          </div>
        )}

        <form
          action="https://formspree.io/f/mgvylnne"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_redirect" value="/contact?success=1" />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
            className="w-full bg-[#1a1f36] text-white placeholder-white/70 border border-white/10 p-3 rounded"
          />
          <input
            type="text"
            name="contact"
            required
            placeholder="Best contact (Email or WhatsApp)"
            className="w-full bg-[#1a1f36] text-white placeholder-white/70 border border-white/10 p-3 rounded"
          />

          <textarea
            name="message"
            required
            placeholder="What would you like to discuss or build?"
            className="w-full bg-[#1a1f36] text-white placeholder-white/70 border border-white/10 p-3 rounded"
            rows={4}
          />

          <input type="text" name="_gotcha" className="hidden" />

          <button
            type="submit"
            className="bg-[#5A4FFF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#62A3E3] transition"
          >
            🚀 Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-sm text-white/70 space-y-2">
          <p>Prefer to reach out directly?</p>
          <p>
            📧 <Link href="mailto:gatshaayanda@gmail.com" className="underline hover:text-[#62A3E3]">gatshaayanda@gmail.com</Link>
          </p>
          <p>
            💬 WhatsApp: <Link href="https://wa.me/26773065682" className="underline hover:text-[#62A3E3]">+267 78 098 928</Link>
          </p>
          <p>
            🔗 <Link href="https://linkedin.com/in/ayandagatsha" target="_blank" className="underline hover:text-[#62A3E3]">LinkedIn Profile</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
