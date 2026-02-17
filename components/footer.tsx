import Image from "next/image"
import { Mail } from "lucide-react"

const footerLinks = {
  Servicios: [
    "Detección de Humo y Gas",
    "Alerta Sísmica",
    "Soluciones en CCTV",
    "Conectividad Estructurada",
  ],
  Empresa: [
    "Inicio",
    "Servicios",
    "Nosotros",
    "Experiencia",
    "Testimonios",
    "Preguntas frecuentes",
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="flex max-w-sm flex-col gap-5">
            <Image
              src="/images/logo.png"
              alt="Alvic logo"
              width={160}
              height={50}
              className="h-auto w-[160px] shrink-0"
            />
            <p className="text-base leading-relaxed text-primary-foreground/60">
              Soluciones integrales en ingeniería, soporte, instalación y
              mantenimiento en sistemas de seguridad y conectividad.
            </p>
            <a
              href="mailto:info@alvicss.com"
              className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent/80"
            >
              <Mail className="h-4 w-4" />
              info@alvicss.com
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <span className="text-sm text-primary-foreground/50 transition-colors hover:text-accent cursor-pointer">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {"© 2026 Alvic. Todos los derechos reservados."}
          </p>
          <p className="text-xs text-primary-foreground/40">
            Seguridad y conectividad de confianza
          </p>
        </div>
      </div>
    </footer>
  )
}
