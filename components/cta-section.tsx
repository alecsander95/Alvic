import * as React from "react"
import { ArrowRight, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function UilWhatsapp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
      />
    </svg>
  )
}

export function CtaSection() {
  return (
    <>
      <section id="contacto" className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
            <div className="flex flex-col items-start gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-primary/5 px-4 py-2 text-sm font-medium text-accent">
                Faqs
              </span>
              <h2 className="text-3xl font-bold text-[#081C33] md:text-4xl">
                Preguntas frecuentes
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Resolvemos las dudas más comunes sobre nuestros servicios de
                seguridad, detección y conectividad para que tomes la mejor
                decisión para tu proyecto.
              </p>
            </div>

            <div className="mt-2 space-y-3">
              <Accordion type="single" collapsible defaultValue="q1" className="w-full">
                <AccordionItem value="q1" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿Alvic puede reemplazar mi sistema actual de detección o CCTV?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Sí, evaluamos tu infraestructura actual y proponemos una
                      migración gradual o completa, asegurando compatibilidad con
                      tus equipos y normativas vigentes.
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="q2" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿Cuánto tarda normalmente la instalación de un proyecto?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Depende del alcance, pero la mayoría de los proyectos se
                      completan entre pocos días y algunas semanas, siempre con un
                      plan claro de fases y horarios.
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="q3" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿Ofrecen soporte y mantenimiento después de la instalación?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Sí, contamos con planes de soporte y mantenimiento preventivo
                      y correctivo para asegurar la máxima disponibilidad de tus
                      sistemas.
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="q4" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿Pueden trabajar en proyectos industriales, residenciales y
                      comerciales?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Atendemos proyectos en los sectores industrial, residencial,
                      comercial y gubernamental, adaptando la solución a cada
                      entorno.
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="q5" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿Cómo puedo solicitar una cotización?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Puedes escribirnos al correo indicado o llamarnos para que un
                      asesor recopile la información necesaria y te envíe una
                      propuesta detallada.
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="q6" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿En qué zonas geográficas trabajan?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Atendemos principalmente proyectos en la Ciudad de México y
                      área metropolitana, pero podemos evaluar proyectos en otras
                      regiones según el alcance y la complejidad.
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="q7" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿Trabajan con marcas específicas de equipos?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Seleccionamos marcas reconocidas y certificadas en detección,
                      CCTV y redes, siempre priorizando la compatibilidad,
                      disponibilidad de refacciones y soporte a largo plazo.
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="q8" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿Ofrecen visitas de diagnóstico en sitio?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Sí, podemos agendar una visita técnica para revisar tu
                      infraestructura actual, detectar riesgos y definir el alcance
                      real del proyecto antes de cotizar.
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="q9" className="border-none">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    <AccordionTrigger className="w-full px-5 py-4 text-left text-sm font-medium text-[#081C33] transition-all hover:bg-card/80 hover:no-underline md:text-base [&>svg]:text-accent/80">
                      ¿Qué tipo de garantías manejan en los proyectos?
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground">
                      Nuestras soluciones incluyen garantía sobre la instalación y
                      el equipo instalado, de acuerdo con las políticas del
                      fabricante y las condiciones de cada proyecto.
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-final" className="bg-gradient-to-b from-[#020617] via-[#02051a] to-[#3b82f6] py-[140px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center">
          <span className="inline-flex w-fit items-center rounded-full border border-white bg-transparent px-4 py-2 text-sm font-medium text-white">
            Próximo paso
          </span>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
            Tu próximo proyecto de seguridad y conectividad empieza aquí
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Diseñamos, instalamos y mantenemos soluciones a medida en detección,
            CCTV y redes estructuradas para que tu infraestructura esté siempre
            protegida y conectada.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/525500000000?text=Hola%20me%20gustaria%20recibir%20informacion%20sobre%20los%20servicios%20de%20seguridad%20y%20conectividad."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#22c35e]"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                <UilWhatsapp className="h-4 w-4" aria-hidden="true" />
              </span>
              Enviar Whatsapp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+525516094546"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-accent/90"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-white">
                <Phone className="h-4 w-4" />
              </span>
              Llamar ahora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
