import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Sector industrial",
  "Sector residencial",
  "Sector comercial",
  "Sector gubernamental",
]

export function About() {
  return (
    <section id="nosotros" className="bg-background py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Image */}
          <div className="relative lg:flex-1">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Técnico de Alvic instalando un sensor de humo en un entorno con humo"
                width={768}
                height={964}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card p-5 shadow-xl md:-right-8">
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-base text-muted-foreground">
                Años de experiencia
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 lg:flex-1">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-primary/5 px-4 py-2 text-sm font-medium text-accent">
              ¿Quiénes somos?
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-primary md:text-4xl">
              Experiencia, compromiso y profesionalismo
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Alvic es una empresa especializada en brindar servicios integrales
              en ingeniería, soporte, instalación y mantenimiento en sistemas de
              seguridad, cableado estructurado, detección de humo y alarma de
              incendio.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Hoy en día nuestra experiencia, compromiso y profesionalismo nos
              reconoce por proveer soluciones para diversos sectores del
              mercado.
            </p>

            <div className="mt-2 grid grid-cols-2 gap-3 text-base">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
