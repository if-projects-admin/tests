'use client'

import { HamburgerButton } from "@/components/common/HamburgerButton"
import { useState } from "react"

export const SidebarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} variant="primary" />
  )
}
