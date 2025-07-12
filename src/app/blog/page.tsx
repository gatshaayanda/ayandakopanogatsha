'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

interface Blog {
  id: string;
  title: string;
  created_at: { seconds: number; nanoseconds: number };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const snap = await getDocs(
        query(collection(firestore, 'blogs'), orderBy('created_at', 'desc'))
      );
      setPosts(
        snap.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Blog, 'id'>),
        }))
      );
      setLoading(false);
    })();
  }, []);

  return (
    <main className="min-h-screen py-24 px-6 bg-[#0f172a] text-white">
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">🧠 Experience Log</h1>
        <p className="text-white/80">
          These entries reflect real work — system builds, platform insights, client strategy, and what I’ve learned along the way.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        {loading ? (
          <p className="text-center text-white/70">Loading entries…</p>
        ) : posts.length === 0 ? (
          <p className="italic text-center text-white/60">No entries yet.</p>
        ) : (
          <ul className="space-y-8">
            {posts.map(post => (
              <li key={post.id} className="bg-[#1a1f36] p-6 rounded-xl border border-white/10">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-2xl font-semibold text-[#62A3E3] hover:underline"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-sm text-white/60">
                  {new Date(post.created_at.seconds * 1000).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
