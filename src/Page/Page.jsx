import { NavbarComponent } from '../components/navbar'
import { SectionFive } from '../components/sectionFive'
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
        <Element name="Proyectos">
          <SectionThree />
        </Element>
        <Element name="Experiencia">
          <SectionFive />
        </Element>
        <Element name="Tecnologias">
          <SectionTwo />
        </Element>
        <Element name="Contactame">
          <SectionFour />
        </Element>
      </Element>
    </main>
  )
}
