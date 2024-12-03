import { NavbarProps } from './types'
import { MobileNavbar } from './Mobile'
import { DesktopNavbar } from './Desktop'

export const Navbar: React.FC<NavbarProps> = async () => {

  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  )
}
