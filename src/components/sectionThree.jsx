import { Card, CardFooter, Image, Button } from '@nextui-org/react'
import { FaGithub, FaLink } from 'react-icons/fa'

export const SectionThree = () => {
  const projects = [
    {
      image: {
        url: './SorcenProject.png',
        alt: 'Imagen del proyecto SorcenPX.',
      },
      title: 'SorcenPx',
      github: 'https://github.com/STBenji',
      link: null,
    },
    {
      image: {
        url: './aguas-de-since.png',
        alt: 'Imagen del proyecto Aguas de Sincé.',
      },
      title: 'Aguas de Sincé',
      github: 'https://github.com/STBenji',
      link: 'https://aguasdesince.com.co/',
    },
    {
      image: {
        url: './siscomite.png',
        alt: 'Imagen del proyecto Siscomite.',
      },
      title: 'Siscomite',
      github: 'https://github.com/STBenji',
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
              <Image alt={item.image.alt} className="object-cover h-[30dvh]" src={item.image.url} width={300} />

              <CardFooter className="justify-between bg-lighter/70 border-default/20  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-sm tracking-wide text-white">{item.title}.</p>
                <div className="flex gap-1">
                  <a className="flex items-center justify-center w-16 grid-flow-col gap-1 py-2 text-center text-white cursor-pointer rounded-xl text-tiny bg-black/20" href={item.github} target="_blank">
                    GitHub
                    <FaGithub />
                  </a>
                  {item.link && (
                    <a className="grid w-8 grid-flow-col gap-1 py-2 text-center text-white cursor-pointer rounded-xl text-tiny bg-black/20 place-content-center" href={item.link} target="_blank">
                      <FaLink />
                    </a>
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
