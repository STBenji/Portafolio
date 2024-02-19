import { Card, CardFooter, Image, Button, Link } from '@nextui-org/react'
import { useState } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'

export const SectionThree = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [projectsToShow, setProjectsToShow] = useState(3)

  const projects = [
    {
      image: {
        url: './SorcenProject.png',
        alt: 'Imagen del proyecto SorcenPX.',
      },
      title: 'SorcenPx',
      github: 'https://github.com/STBenji/SorcenPX-frontEnd',
      link: null,
      animation: {
        animate: 'fade-up',
        delay: '0',
      },
    },
    {
      image: {
        url: './aguas-de-since.png',
        alt: 'Imagen del proyecto Aguas de Sincé.',
      },
      title: 'Aguas de Sincé',
      github: 'https://github.com/STBenji/aguas-de-since',
      link: 'https://aguasdesince.com.co/',
      animation: {
        animate: 'fade-up',
        delay: '100',
      },
    },
    {
      image: {
        url: './siscomite.png',
        alt: 'Imagen del proyecto Siscomite.',
      },
      title: 'Siscomite',
      github: 'https://github.com/STBenji/Siscomite',
      link: null,
      animation: {
        animate: 'fade-up',
        delay: '200',
      },
    },
  ]

  const showProjects = () => {
    if (projectsToShow + 3 >= projects.length) {
      setShowAllProjects(true)
    }
    setProjectsToShow(Math.min(projectsToShow + 3, projects.length))
  }

  const showLessProjects = () => {
    setProjectsToShow(3)
    setShowAllProjects(false)
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-8 p-5 py-1 text-center mt-14 ">
      <h2 className="text-3xl font-bold md:text-4xl text-lighter" data-aos="fade-down">
        Proyectos
      </h2>
      <div className="flex flex-wrap justify-center h-auto max-w-5xl gap-6 mt-14">
        {projects.slice(0, projectsToShow).map((item, index) => (
          <Card isFooterBlurred radius="lg" className="bg-transparent border-none" key={index} data-aos={item.animation.animate} data-aos-delay={item.animation.delay}>
            <Image alt={item.image.alt} className="object-cover h-[30dvh]" src={item.image.url} width={300} loading="lazy" />

            <CardFooter className="justify-between bg-lighter/70 border-default/20  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-sm tracking-wide text-white">{item.title}.</p>
              <div className="flex gap-1">
                <Button className="text-white" href={item.github} target="_blank" as={Link} variant="flat" radius="lg" size="sm">
                  GitHub
                  <FaGithub />
                </Button>
                {item.link && (
                  <Button className="text-white" href={item.link} target="_blank" as={Link} variant="flat" radius="lg" size="sm" isIconOnly>
                    <FaLink />
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      {projects.length > 3 && (
        <div>
          {showAllProjects ? (
            <Button className="text-whButtonite" onClick={showLessProjects}>
              Ver menos
            </Button>
          ) : (
            <Button className="text-white" onClick={showProjects}>
              Ver más
            </Button>
          )}
        </div>
      )}
    </section>
  )
}
