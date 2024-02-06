import { Card, CardFooter, Image, Button } from '@nextui-org/react'

export const SectionThree = () => {
  return (
    <main className="h-screen p-5">
      <h1>Proyectosnpm run dev</h1>
      <Card isFooterBlurred radius="lg" className="border-none">
        {/* <Image alt="Woman listing to music" className="object-cover" height={200} src="./LogoPrincipal.png" width={200} /> */}
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button className="text-white text-tiny bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
