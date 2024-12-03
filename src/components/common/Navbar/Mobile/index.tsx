import { translation } from '@/utils/internationalization/translation'
import { NavbarProps } from '../types'
import { SidebarMenu } from './SidebarMenu'
import { Anchor } from '@/components/toolkit/Anchor'
import Image from 'next/image'

export const MobileNavbar: React.FC<NavbarProps> = async () => {
  const { raw } = await translation('navbar')

  return (
    <nav className='lg:hidden block bg-white shadow py-2 sticky inset-0 px-6 w-full'>
      <section className='w-full flex justify-between items-center gap-4'>
        <Anchor className="max-w-12 flex items-center gap-1" href="#" variant="custom">
          <Image alt="Logo" height={64} src="/logos/logo.png" width={64} />
          <span className='text-indigo-600 font-semibold text-lg'>
            Thrive
          </span>
        </Anchor>
        <SidebarMenu />
      </section>
    </nav>
  )
}
