'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

interface Project {
  id: string;
  industry: string;
  progress_update: string;
}

export default function ProjectUpdates() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snap = await getDocs(collection(firestore, 'projects'));
        const docs = snap.docs
          .map(doc => ({
            id: doc.id,
            ...(doc.data() as Partial<Project>),
          }))
          .filter(
            p =>
              typeof p.industry === 'string' &&
              typeof p.progress_update === 'string' &&
              p.progress_update.trim() !== ''
          );
        setProjects(docs as Project[]);
      } catch (err) {
        console.error('Error loading project data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        projects.length > 0 ? (prev + 1) % projects.length : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [projects]);

  if (loading) return null;
  if (projects.length === 0) return null;

  const current = projects[currentIndex];

  return (
    <section className="py-16 bg-[#0f172a] text-white px-6">
      <div className="container mx-auto max-w-3xl text-center border border-white/10 rounded-xl p-8 bg-[#1a1f36] shadow hover:shadow-lg transition">
        <p className="text-sm uppercase text-[#62A3E3] font-semibold tracking-widest mb-2">
          📊 {projects.length} active projects and counting!
        </p>
        <p className="text-lg text-white font-medium italic mb-2">
          {current?.progress_update}
        </p>
        <p className="text-sm text-white/60">
          — Project from the <span className="capitalize">{current?.industry}</span> industry
        </p>
      </div>
    </section>
  );
}
