import Image from 'next/image'

import { PostActions } from './PostActions'
import { PostDropdown } from './PostDropdown'
import { PostCardProps } from './types'

export const PostCard: React.FC<PostCardProps> = ({
  post,
  disableShadow = false
}) => {
  return (
    <article
      className={`flex flex-col gap-4 rounded-md bg-white py-4 ${disableShadow ? '' : 'shadown'}`}
    >
      <div className="flex w-full justify-between gap-8 px-4">
        <div className="flex w-full gap-3">
          <figure className="h-10 w-10">
            <Image
              alt={post.user.name}
              className="h-10 w-10 cursor-pointer rounded-full object-cover transition-all duration-300 selection:bg-transparent hover:brightness-125"
              height={410}
              src={post.user.profile_picture.src}
              width={615}
            />
          </figure>
          <article className="flex flex-col">
            <h2 className="text-sm lg:text-base">
              {post.user.name}
            </h2>
            <p className="text-xs font-light text-slate-500 lg:text-sm">
              20 minutos atrás
            </p>
          </article>
        </div>
        <PostDropdown />
      </div>
      <p
        className="px-4 text-sm"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <figure className="w-full max-w-full rounded-sm">
        <Image
          alt="Post Hero Image"
          className="max-h-[420px] rounded-sm object-cover selection:bg-transparent"
          height={3375}
          // src={post.feature_image.src}
          src="https://birchtree.me/content/images/size/w2000/2020/08/DB0B3B0A-1888-41AB-B044-AB24A90229CE..jpeg"
          width={6000}
        />
      </figure>
      <PostActions />
    </article>
  )
}
