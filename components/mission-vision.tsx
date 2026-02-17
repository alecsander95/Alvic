import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Nuestra Filosofia
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-primary md:text-4xl">
            Lo que nos impulsa cada dia
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Mision */}
          <div className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 shadow-lg transition-all hover:shadow-xl md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Target className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Mision</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Proveer soluciones de alta tecnologia y excelente calidad que
              permitan resguardar la integridad de los bienes y colaboradores de
              nuestros clientes.
            </p>
          </div>

          {/* Vision */}
          <div className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 shadow-lg transition-all hover:shadow-xl md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
              <Eye className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Vision</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Ser una empresa lider que garantice la seguridad de personas y
              empresas mediante servicios integrales de la mas alta calidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
