"use client"

import { useState } from "react"
import Image from "next/image"
import { Flame, AlertTriangle, Camera, Network, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Detección de Humo y Gas",
    description:
      "Sistemas diseñados para detectar, alertar y evacuar. Protección integral contra incendios y fugas de gas con tecnología de punta.",
    features: ["Detección de humo", "Detección de gas", "Alarmas de incendio"],
    imageSrc: "/images/servicios/deteccion-humo-gas.jpg",
    imageAlt: "Sistema de detección de humo y gas instalado por Alvic",
  },
  {
    icon: AlertTriangle,
    title: "Alerta Sísmica",
    description:
      "Sistemas de alerta temprana con integración a la red CIRES. Anticipación y protección ante eventos sísmicos.",
    features: ["Alerta temprana", "Integración CIRES", "Notificación instantánea"],
    imageSrc: "/images/servicios/alerta-sismica.jpg",
    imageAlt: "Panel de alerta sísmica operado por un especialista de Alvic",
  },
  {
    icon: Camera,
    title: "Soluciones en CCTV",
    description:
      "Sistemas de videovigilancia y monitoreo personalizados. Circuitos cerrados de televisión de alta definición.",
    features: ["Cámaras HD/4K", "Monitoreo remoto", "Grabación continua", "Análisis inteligente"],
    imageSrc: "/images/servicios/soluciones-cctv.jpg",
    imageAlt: "Monitores de CCTV mostrando diferentes zonas vigiladas por Alvic",
  },
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]

  return (
    <section id="servicios" className="bg-muted py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-14 text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-primary/5 px-4 py-2 text-sm font-medium text-accent">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-primary md:text-4xl">
            Soluciones tecnológicas a tu medida
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ofrecemos servicios integrales en ingeniería, instalación y
            mantenimiento para garantizar la seguridad y conectividad de tu
            infraestructura.
          </p>
        </div>

        <div className="rounded-3xl bg-white pt-10 px-10 pb-20 shadow-xl">
          <div className="flex gap-3 overflow-x-auto border-b border-border pb-4 justify-center">
            {services.map((service, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex min-w-[190px] flex-col items-start gap-1 rounded-2xl px-4 py-3 text-left transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        isActive ? "bg-accent/20" : "bg-accent/10"
                      }`}
                    >
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-semibold">
                      {service.title}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold text-primary md:text-3xl">
                {activeService.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {activeService.description}
              </p>

              <ul className="mt-2 grid gap-2 text-base text-muted-foreground">
                {activeService.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#cta-final"
                  aria-label={`Solicitar información sobre ${activeService.title}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent/90"
                >
                  Solicitar informacion
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative flex h-full items-center justify-center">
              <div className="relative h-[90%] min-h-[260px] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                <Image
                  src={activeService.imageSrc}
                  alt={activeService.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 460px, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
