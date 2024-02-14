import { NavbarComponent } from '../components/navbar'
import { SectionFour } from '../components/sectionFour'
import { SectionOne } from '../components/sectionOne'
import { SectionThree } from '../components/sectionThree'
import { SectionTwo } from '../components/sectionTwo'

import { Element } from 'react-scroll'

export default function PortfolioPage() {
  return (
    <main className="bg-sixth">
      <Element name="Inicio">
        <NavbarComponent />
        <SectionOne />
        <Element name="Tecnologias">
          <SectionTwo />
        </Element>
        <Element name="Proyectos">
          <SectionThree />
        </Element>
        <Element name="Contactame">
          <SectionFour />
        </Element>
      </Element>
    </main>
  )
}
