import { NextPage } from 'next'
import { setRequestLocale } from 'next-intl/server'

import Footer from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { NextPageDefaultProps } from '@/types/nextPageDefaultProps'
import { getMetaData } from '@/utils/getters/getMetaData'

import { Feed } from './components/Feed'

export async function generateMetadata() {
  return getMetaData({
    title: 'Thrive',
    description:
      'Encontre e participe de grupos com pessoas com objetivos saudáveis iguais ao seu na nossa plataforma',
    opengraph: ''
  })
}

const Page: NextPage<NextPageDefaultProps> = async ({ params: { locale } }) => {
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main>
        <Feed />
      </main>
      <Footer />
    </>
  )
}

export default Page
