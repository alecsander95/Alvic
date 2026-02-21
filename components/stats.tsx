import Image from "next/image"

export function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-primary/5 px-4 py-2 text-sm font-medium text-accent">
                Sobre Alvic
              </span>
              <h2 className="mt-3 text-2xl font-bold text-[#081C33] md:text-3xl">
                Sobre Alvic
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                En Alvic, combinamos ingenieria, tecnologia y experiencia para
                crear soluciones que protegen y optimizan la operacion de
                nuestros clientes en distintos sectores.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-[#081C33]">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-accent md:text-4xl">
                15+
              </span>
              <span className="text-xs text-muted-foreground md:text-sm">
                años de experiencia
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-accent md:text-4xl">
                500+
              </span>
              <span className="text-xs text-muted-foreground md:text-sm">
                proyectos completados
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-accent md:text-4xl">
                4
              </span>
              <span className="text-xs text-muted-foreground md:text-sm">
                sectores atendidos
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-accent md:text-4xl">
                24/7
              </span>
              <span className="text-xs text-muted-foreground md:text-sm">
                soporte técnico
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 h-[341px] overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            src="/images/about-plans.jpg"
            alt="Planos de ingeniería y distribución de dispositivos en proyecto"
            width={1280}
            height={682}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
