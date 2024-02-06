import { NavbarComponent } from '../components/navbar'
import { SectionFour } from '../components/sectionFour'
import { SectionOne } from '../components/sectionOne'
import { SectionThree } from '../components/sectionThree'
import { SectionTwo } from '../components/sectionTwo'

export default function PortfolioPage() {
  return (
    <main className='bg-sixth'>
      <NavbarComponent />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  )
}
