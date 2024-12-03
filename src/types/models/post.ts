// import { Locale } from '../@common/global'
// import { User } from './user'

export interface Post {
  // content: string
  // creator: User
  // creator_id: number
  // id: number
  // image_url: string
  // locale: Locale
  // location: string
  // number_likes: number
  // type: PostType
  // user_liked?: boolean
  // video_url: string
  user: {
    name: string
    email: string
    profile_picture: {
      src: string
      alt: string
    }
  }
  feature_image: {
    src: string
    alt: string
  }
  content: string
  liked_by: string[]
}

// export type PostType = 'video' | 'image'
