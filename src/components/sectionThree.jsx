import { Card, CardFooter, Image, Button, Link } from '@nextui-org/react'
import { FaGithub, FaLink } from 'react-icons/fa'

export const SectionThree = () => {
  const projects = [
    {
      image: {
        url: './SorcenProject.png',
        alt: 'Imagen del proyecto SorcenPX.',
      },
      title: 'SorcenPx',
      github: 'https://github.com/STBenji/SorcenPX-frontEnd',
      link: null,
    },
    {
      image: {
        url: './aguas-de-since.png',
        alt: 'Imagen del proyecto Aguas de Sincé.',
      },
      title: 'Aguas de Sincé',
      github: 'https://github.com/STBenji/aguas-de-since',
      link: 'https://aguasdesince.com.co/',
    },
    {
      image: {
        url: './siscomite.png',
        alt: 'Imagen del proyecto Siscomite.',
      },
      title: 'Siscomite',
      github: 'https://github.com/STBenji/Siscomite',
      link: null,
    },
    // {
    //   image: {
    //     url: './siscomite.png',
    //     alt: 'Imagen del proyecto Siscomite.',
    //   },
    //   title: 'Siscomite',
    //   github: 'https://github.com/STBenji',
    //   link: null,
    // },
    // {
    //   image: {
    //     url: './siscomite.png',
    //     alt: 'Imagen del proyecto Siscomite.',
    //   },
    //   title: 'Siscomite',
    //   github: 'https://github.com/STBenji',
    //   link: null,
    // },
    // {
    //   image: {
    //     url: './siscomite.png',
    //     alt: 'Imagen del proyecto Siscomite.',
    //   },
    //   title: 'Siscomite',
    //   github: 'https://github.com/STBenji',
    //   link: null,
    // },
    // {
    //   image: {
    //     url: './siscomite.png',
    //     alt: 'Imagen del proyecto Siscomite.',
    //   },
    //   title: 'Siscomite',
    //   github: 'https://github.com/STBenji',
    //   link: null,
    // },
    // {
    //   image: {
    //     url: './siscomite.png',
    //     alt: 'Imagen del proyecto Siscomite.',
    //   },
    //   title: 'Siscomite',
    //   github: 'https://github.com/STBenji',
    //   link: null,
    // },
  ]

  return (
    <section className="flex flex-col items-center gap-8 p-5 mt-14">
      <h2 className="text-3xl font-bold md:text-4xl text-lighter">Proyectos</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-14">
        {projects &&
          projects.map((item, index) => (
            <Card isFooterBlurred radius="lg" className="bg-transparent border-none" key={index}>
              <Image alt={item.image.alt} className="object-cover h-[30dvh]" src={item.image.url} width={300} loading='lazy'/>

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
      {projects.length > 3 && <Button className="text-white">Ver más</Button>}
    </section>
  )
}
