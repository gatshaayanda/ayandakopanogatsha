import { Metadata } from 'next';
import ContactForm from './ContactForm';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Contact – Ayanda Kopano Gatsha',
  description: 'Let’s collaborate, connect, or kick off your next digital project.',
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20 text-white">Loading contact form…</div>}>
      <ContactForm />
    </Suspense>
  );
}
