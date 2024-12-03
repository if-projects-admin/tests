import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { Anchor } from '@/components/toolkit/Anchor'
import { rawTranslation } from '@/utils/internationalization/rawTranslation'

import { SavedItems } from './icons/SavedItems'

export const ProfileMenu: React.FC = async () => {
  const t = await getTranslations('user-sidebar')
  const { secondColumn } = rawTranslation({
    t,
    namespace: 'user-sidebar',
    key: 'list'
  })

  return (
    <aside className="inset-0 top-28 hidden h-full w-full max-w-[230px] lg:sticky lg:flex">
      <div className="flex max-h-[420px] w-full max-w-xs flex-col gap-8">
        <section className="rounded-md bg-white">
          <figure className="w-full">
            <Image
              src='https://wallpapercave.com/wp/wp10824842.jpg'
              alt="Vitor Background Picture"
              className="h-full max-h-[60px] w-full rounded-t-md object-cover"
              height={1080}
              width={1920}
            />
          </figure>
          <figure className="w-full">
            <Image
              alt="Vitor Profile Picture"
              className="mx-auto -mt-6 h-12 w-12 cursor-pointer rounded-full transition-all duration-300 hover:brightness-125"
              height={400}
              src="https://avatars.githubusercontent.com/u/102386982?v=4"
              width={400}
            />
          </figure>
          <article className="flex w-full flex-col divide-y divide-slate-200 lg:pb-6">
            <div className="flex w-full flex-col items-center px-4 py-4 underline-offset-2">
              <Anchor
                className="text-sm text-slate-600 transition-all duration-300 hover:underline"
                href={`/profile/vitor-silva`}
                variant="custom"
              >
                Vitor Gabriel Silva
              </Anchor>
              <p className="text-xs text-slate-500">@vitorgabriel123@gmail.com</p>
            </div>
            <div className="flex w-full flex-col py-3">
              <span className="flex w-full cursor-pointer items-center justify-between gap-2 px-4 py-1 transition-all duration-default hover:bg-neutral-100">
                <p className="w-full text-sm text-slate-600">
                  {t('list.firstColumn.friends')}
                </p>
                <p className="text-sm font-medium text-blue-500">
                  10 amigos
                </p>
              </span>
              <p className="w-full cursor-pointer px-4 py-1 text-sm text-slate-600 transition-all duration-default hover:bg-neutral-100">
                {t('list.firstColumn.analytics')}
              </p>
            </div>
            <div className="flex w-full flex-col py-3">
              {secondColumn.map((item, index: number) => (
                <p
                  className="w-full cursor-pointer px-4 py-1 text-sm text-slate-600 transition-all duration-default hover:bg-neutral-100"
                  key={`${item}-${index}`}
                >
                  {item.label}
                </p>
              ))}
            </div>
            <div className="flex w-full flex-col pt-3">
              <div className="flex w-full cursor-pointer items-center gap-2 px-4 py-1 transition-all duration-default hover:bg-neutral-100">
                <SavedItems className="h-4 w-4" />
                <p className="w-full cursor-pointer text-sm text-slate-600 transition-all duration-default hover:bg-neutral-100">
                  {t('list.thirdColumn.favourites')}
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </aside>
  )
}
