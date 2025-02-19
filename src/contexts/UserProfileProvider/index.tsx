'use client'

import { createContext, useContext, useState } from 'react'

import { Post } from '@/types/models/post'

import { UserProfileContextProps, UserProfileProviderProps } from './types'

const UserProfileContext = createContext<UserProfileContextProps>(null)

export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({
  children,
  user,
  myCreatedPosts
}) => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<number>(0)
  const [myPosts, _] = useState<Post[]>(myCreatedPosts)

  return (
    <UserProfileContext.Provider
      value={{ currentSelectedTab, setCurrentSelectedTab, user, myPosts }}
    >
      {children}
    </UserProfileContext.Provider>
  )
}

export const useUserProfileContext = () => {
  return useContext(UserProfileContext)
}
