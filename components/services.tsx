"use client"

import { useState } from "react"
import Image from "next/image"
import { Flame, AlertTriangle, Camera, ArrowRight, HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
  {
    id: "item-1",
    icon: Flame,
    title: "Sistemas Contra Incendio",
    microcopy: "Sistemas diseñados para detectar, alertar, controlar y extinguir incendios protegiendo vidas humanas y bienes materiales.",
    description:
      "Sistemas diseñados para detectar, alertar, controlar y extinguir incendios protegiendo vidas humanas y bienes materiales.",
    features: [
      "Sistemas de detección y alarma",
      "Sistemas de supresión automática",
      "Sistemas de red hidráulica contra incendio",
    ],
    imageSrc: "/images/servicios/deteccion-humo-gas.jpg",
    imageAlt: "Sistema de detección de humo y gas instalado por Alvic",
  },
  {
    id: "item-2",
    icon: AlertTriangle,
    title: "Alerta Sísmica",
    microcopy: "Sistemas de alerta temprana con integración CIRES. Anticipación y protección ante eventos sísmicos.",
    description:
      "Sistemas de alerta temprana con integración CIRES. Anticipación y protección ante eventos sísmicos.",
    features: [
      "Integración CIRES",
      "Alertas tempranas",
      "Instalación certificada",
    ],
    imageSrc: "/images/servicios/alerta-sismica.jpg",
    imageAlt: "Panel de alerta sísmica operado por un especialista de Alvic",
  },
  {
    id: "item-3",
    icon: Camera,
    title: "CCTV y Videovigilancia",
    microcopy: "Sistemas de videovigilancia y monitoreo personalizados. Circuitos cerrados de televisión de alta definición.",
    description:
      "Sistemas de videovigilancia y monitoreo personalizados. Circuitos cerrados de televisión de alta definición.",
    features: [
      "Cámaras HD y 4K",
      "Monitoreo remoto",
      "Grabación continua",
      "Análisis inteligente",
    ],
    imageSrc: "/images/servicios/soluciones-cctv.jpg",
    imageAlt: "Monitores de CCTV mostrando diferentes zonas vigiladas por Alvic",
  },
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]

  return (
    <section id="servicios" className="bg-muted pt-16 pb-0 md:pt-24 md:pb-0">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center md:mb-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-primary/5 px-4 py-2 text-sm font-medium text-accent">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-primary md:text-4xl">
            Soluciones integrales en seguridad y tecnología para empresas.
          </h2>
        </div>

        {/* Mobile/Tablet Accordion View */}
        <div className="block lg:hidden">
          <Accordion type="single" collapsible defaultValue="item-1" className="flex flex-col gap-4">
            {services.map((service) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline">
                  <div className="flex w-full items-start gap-4 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold text-primary">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {service.microcopy}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-6 pt-0">
                  <div className="ml-[56px] flex flex-col gap-4">
                    <ul className="grid gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href="#cta-final"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-transform active:scale-95"
                      >
                        Solicitar información
                      </a>

                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop Tabs/Grid View */}
        <div className="hidden lg:block rounded-3xl bg-white pt-10 px-10 pb-20 shadow-xl">
          <div className="flex gap-3 border-b border-border pb-4 justify-center">
            {services.map((service, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex min-w-[220px] flex-col items-start gap-1 rounded-2xl px-5 py-4 text-left transition-all ${
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

          <div className="mt-8 grid gap-10 grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">
            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-bold text-primary">
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
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
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

        {/* Featured Card (Mobile/Desktop) */}
        <div className="mt-8 md:mt-12">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-8 text-center shadow-lg md:px-10 md:py-10">
            <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8">
              <div className="flex flex-col items-center gap-3 text-center md:flex-row md:text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-white">
                    ¿No sabes cuál necesitas?
                  </h3>
                  <p className="text-primary-foreground/80">
                    Te asesoramos sin costo para encontrar la mejor solución.
                  </p>
                </div>
              </div>
              <a
                href="#cta-final"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-primary transition-transform hover:scale-105 md:w-auto"
              >
                Solicitar asesoría
              </a>
            </div>
            {/* Background pattern */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
