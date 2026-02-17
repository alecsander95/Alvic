import Image from "next/image"
import { Star, Quote, UserCircle2, ArrowRight } from "lucide-react"

const reviews = [
  {
    company: "Planta industrial de manufactura",
    quote:
      "Alvic nos ayudo a modernizar todo el sistema de deteccion y CCTV sin detener la operacion diaria.",
    name: "Carlos M.",
    role: "Gerente de Operaciones",
    imageSrc: "/images/testimonios/testimonio-1-icon.jpg",
  },
  {
    company: "Corporativo de oficinas",
    quote:
      "El equipo de Alvic diseño una solucion integral de cableado y seguridad que escalo con nuestro crecimiento.",
    name: "Ana R.",
    role: "Directora de TI",
    imageSrc: "/images/testimonios/testimonio-2-icon.jpg",
  },
  {
    company: "Desarrollo residencial",
    quote:
      "Hoy contamos con un sistema confiable de alarma y monitoreo que da tranquilidad a nuestros residentes.",
    name: "Luis G.",
    role: "Administrador de Condominio",
    imageSrc: "/images/testimonios/testimonio-3-icon.jpg",
  },
]

export function Values() {
  return (
    <section id="testimonios" className="bg-background py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-primary/5 px-4 py-2 text-sm font-medium text-accent">
            Testimonios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-primary md:text-4xl">
            ¿Por qué empresas como la tuya confían en Alvic?
          </h2>
        </div>

        <div className="mb-10 flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-accent/20">
              <Image
                src="/images/client-1.jpg"
                alt="Cliente satisfecho 1"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-accent/40">
              <Image
                src="/images/client-2.jpg"
                alt="Cliente satisfecho 2"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-accent/60">
              <Image
                src="/images/client-3.jpg"
                alt="Cliente satisfecho 3"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-accent/80">
              <Image
                src="/images/client-4.jpg"
                alt="Cliente satisfecho 4"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="text-xs font-semibold text-primary md:text-sm">
                4.8/5 en proyectos implementados
              </span>
            </div>
            <p className="text-xs md:text-sm">
              Basado en experiencias reales de clientes en distintos sectores.
            </p>
          </div>
          <a
            href="#cta-final"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-accent/90"
          >
            Solicitar Cotización
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.company}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 text-left shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 overflow-hidden">
                  <Image
                    src={review.imageSrc}
                    alt={`Icono ${review.company}`}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                </span>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                </div>
              </div>
              <h3 className="mt-4 text-base font-semibold text-primary">
                {review.company}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                “{review.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <UserCircle2 className="h-8 w-8 text-accent/80" />
                <div>
                  <p className="font-semibold text-primary">{review.name}</p>
                  <p>{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
