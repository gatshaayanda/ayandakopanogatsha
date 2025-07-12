'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/utils/firebaseConfig';

interface Blog {
  title: string;
  body: string;
  created_at: { seconds: number; nanoseconds: number };
}

export default function BlogPostPage() {
  const router = useRouter();
  const path = usePathname();
  const id = path.split('/').pop()!;

  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(firestore, 'blogs', id));
        if (!snap.exists()) {
          router.replace('/experience'); // updated path
          return;
        }
        setPost(snap.data() as Blog);
      } catch {
        router.replace('/experience');
      } finally {
        setLoading(false);
      }
    })();
  }, [id, router]);

  if (loading) return <p className="text-center py-20 text-white">Loading entry…</p>;
  if (!post) return <p className="text-center py-20 text-white">Post not found.</p>;

  return (
    <main className="min-h-screen py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <button
          onClick={() => router.push('/experience')}
          className="text-sm text-[#62A3E3] hover:underline"
        >
          ← Back to Experience
        </button>

        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-white/60">
          {new Date(post.created_at.seconds * 1000).toLocaleDateString()}
        </p>

        <div className="prose prose-invert max-w-none whitespace-pre-wrap text-white/90">
          {post.body}
        </div>
      </div>
    </main>
  );
}
