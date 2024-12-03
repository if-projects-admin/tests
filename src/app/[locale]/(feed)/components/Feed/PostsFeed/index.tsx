import { PostCard } from '@/components/common/PostCard'
import { Post } from '@/types/models/post'

import { PostFeedProps } from './types'
import { POSTS_DATA } from './data'

export const PostFeed: React.FC<PostFeedProps> = async () => {
  return (
    <section className="flex w-full max-w-full flex-col gap-4">
      {POSTS_DATA.map((post: Post, index: number) => (
        <PostCard key={`post-${index}`} post={post} />
      ))}
    </section>
  )
}

// : (
//   <section className="flex w-full max-w-full flex-col gap-4">
//     <SkeletonHorizontalCard />
//     <SkeletonHorizontalCard />
//     <SkeletonHorizontalCard />
//     <SkeletonHorizontalCard />
//     <SkeletonHorizontalCard />
//     <SkeletonHorizontalCard />
//   </section>
// )
