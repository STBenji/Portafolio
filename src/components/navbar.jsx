import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from '@nextui-org/react'
import { Link } from 'react-scroll'

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Inicio', 'Tecnologias', 'Proyectos', 'Experiencia', 'Contactame']

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent border-b ">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        <NavbarBrand>
          <Image src="/icon.png" width={130} loading="lazy" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-12 sm:flex" justify="center">
        <NavbarItem className="cursor-pointer">
          <Link to="Inicio" spy={true} smooth={true} duration={400}>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <Link to="Proyectos" spy={true} smooth={true} duration={400}>
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <Link to="Experiencia" spy={true} smooth={true} duration={400}>
            Experiencia
          </Link>
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <Link to="Tecnologias" spy={true} smooth={true} duration={400}>
            Tecnologías
          </Link>
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <Link to="Contactame" spy={true} smooth={true} duration={400}>
            Contáctame
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white" to={item} spy={true} smooth={true} duration={400}>
            {item}
          </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
