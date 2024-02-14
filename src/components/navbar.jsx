import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from '@nextui-org/react'

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Inicio', 'Proyectos', 'Contáctame']

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent border-b ">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        <NavbarBrand>
          <Image src="/icon.png" width={130} loading='lazy'/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-12 sm:flex" justify="center">
        <NavbarItem className="cursor-pointer">Inicio</NavbarItem>
        <NavbarItem className="cursor-pointer">Proyectos</NavbarItem>
        <NavbarItem className="cursor-pointer">Contáctame</NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <p className="w-full text-white">{item}</p>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
