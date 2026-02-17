import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Expertise() {
  return (
    <section id="experiencia" className="bg-primary py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6 text-primary-foreground">
            <span className="inline-flex w-fit items-center rounded-full border border-white bg-transparent px-4 py-2 text-sm font-medium text-white">
              Experiencia
            </span>
            <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
              Descubre nuestro compromiso con la excelencia
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Con más de una década de experiencia, diseñamos soluciones que
              impulsan el crecimiento de tu negocio. Entendemos los retos de
              cada entorno y trabajamos a tu lado para garantizar proyectos
              seguros, confiables y escalables.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Nuestro equipo integra ingeniería, consultoría y soporte
              especializado para asegurar resultados medibles en cada
              implementación.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cta-final"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary transition-all hover:scale-[1.02]"
              >
                Solicitar Cotización
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <Image
                src="/images/expertise-alerta-sismica.jpg"
                alt="Técnico de Alvic instalando un sistema de alerta sísmica en un entorno industrial"
                width={640}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
