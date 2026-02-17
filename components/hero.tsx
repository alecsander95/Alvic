import { Shield, ArrowRight, Phone } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary pt-20"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-electric.jpg')" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16">
        {/* Left Content */}
        <div className="flex max-w-2xl flex-col gap-8 lg:flex-1">
          <div className="flex items-center gap-2 rounded-full border border-white bg-transparent px-4 py-2 w-fit">
            <Shield className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">
              Seguridad y Conectividad
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Soluciones integrales en{" "}
            <span className="text-white">seguridad</span> y{" "}
            <span className="text-white">conectividad</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-white">
            Ingenieria, instalacion y mantenimiento en sistemas de seguridad,
            deteccion y redes estructuradas.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta-final"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-accent/90"
            >
              <Phone className="h-4 w-4" />
              Hablar con un asesor
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right - Placeholder (stats grid movido a seccion inferior) */}
        <div className="lg:flex-1 lg:max-w-md" />
      </div>
    </section>
  )
}
