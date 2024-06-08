import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  DonCargo, Entrega Confiable
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Experimenta lo mejor en entregas puntuales y seguras trayendo tus productos
                  favoritos desde USA.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Obtener una Cotización
                </Link>
                <Link
                  href="/#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Más Información
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-gray-900 p-4 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                <ClockIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Entrega Puntual</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Nuestros mensajeros están capacitados para entregar sus paquetes a tiempo, cada
                  vez.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-gray-900 p-4 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                <ShieldIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Manejo Seguro</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Sus paquetes están en manos seguras con nuestros mensajeros profesionales.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-gray-900 p-4 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                <TruckIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cobertura Nacional</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Entregamos a cada rincón del país, sin importar qué tan remoto sea.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Testimonios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Lo que dicen nuestros clientes
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestros clientes aman el servicio de entrega confiable y seguro que brindamos.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4 rounded-lg border bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="rounded-full bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                  <UserIcon className="h-6 w-6" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold">John Doe</h4>
                    <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc.</div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "Don Cargo ha sido un cambio de juego para mi, puedo pedir mis productos
                    favoritos desde USA, congelando los precios y asi ahorrar mucho dinero."
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="rounded-full bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                  <UserIcon className="h-6 w-6" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold">Jane Smith</h4>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Fundadora, Startup Co.
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "He estado usando Don Cargo desde que comenzaron y nunca me\n han decepcionado.
                    Su cobertura nacional y atención al\n detalle son insuperables."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
