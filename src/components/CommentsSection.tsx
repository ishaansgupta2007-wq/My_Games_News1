import React, { useState } from 'react';
import { Comment } from '../types';
import { MessageSquare, Heart, CornerDownRight, Send } from 'lucide-react';

interface CommentsSectionProps {
  articleId: string;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    authorName: 'Kenji_Ronin',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    content: 'The decision to set Ghost of Yōtei 300 years later in Hokkaido is genuinely brilliant. Tsushima was about rigid bushido codes; northern Japan in 1603 allows for raw frontier survival and firearm dynamics.',
    timestamp: '3 hours ago',
    likes: 24,
    userLiked: false,
  },
  {
    id: 'c2',
    authorName: 'EldenTarnished_99',
    authorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    content: 'Turning off Camera Auto-Recovery in Elden Ring literally saved my sanity on the Dancing Lion boss. Glad GamePulse is highlighting these technical PC options!',
    timestamp: '5 hours ago',
    likes: 18,
    userLiked: false,
  },
  {
    id: 'c3',
    authorName: 'FramePacer_Pro',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    content: 'The PSSR upscaling on PS5 Pro looks remarkably clean here. If they can lock 4K 60fps with this level of foliage density, it’s an instant day-one purchase.',
    timestamp: '6 hours ago',
    likes: 9,
    userLiked: false,
  },
];

export const CommentsSection: React.FC<CommentsSectionProps> = ({ articleId }) => {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const added: Comment = {
      id: `c_${Date.now()}`,
      authorName: authorName.trim() || 'Anonymous Gamer',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      content: newComment.trim(),
      timestamp: 'Just now',
      likes: 0,
      userLiked: false,
    };

    setComments([added, ...comments]);
    setNewComment('');
  };

  const toggleLike = (id: string) => {
    setComments(
      comments.map((c) => {
        if (c.id === id) {
          const userLiked = !c.userLiked;
          return {
            ...c,
            userLiked,
            likes: userLiked ? c.likes + 1 : c.likes - 1,
          };
        }
        return c;
      })
    );
  };

  return (
    <section className="mt-16 pt-12 border-t border-neutral-800">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2.5">
          <MessageSquare className="w-5 h-5 text-rose-500" />
          <h3 className="text-xl font-bold text-white font-display">
            Reader Discussion ({comments.length})
          </h3>
        </div>
        <span className="text-xs text-neutral-500 font-mono">Civility Guidelines Apply</span>
      </div>

      {/* Post comment box */}
      <form onSubmit={handlePost} className="mb-10 p-5 rounded-xl bg-neutral-900 border border-neutral-800">
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Your name or handle..."
            className="w-full sm:w-1/3 px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-neutral-700"
          />
        </div>
        <textarea
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your perspective or tactical findings..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-neutral-700 mb-3 resize-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Post Comment</span>
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={comment.authorAvatar}
                  alt={comment.authorName}
                  className="w-7 h-7 rounded-full object-cover border border-neutral-700"
                />
                <div>
                  <span className="text-sm font-semibold text-white block">
                    {comment.authorName}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {comment.timestamp}
                  </span>
                </div>
              </div>

              <button
                onClick={() => toggleLike(comment.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                  comment.userLiked
                    ? 'text-rose-400 bg-rose-950/40 border border-rose-800/60'
                    : 'text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800'
                }`}
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    comment.userLiked ? 'fill-rose-500 text-rose-500' : ''
                  }`}
                />
                <span className="tabular-nums">{comment.likes}</span>
              </button>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed pl-10">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
