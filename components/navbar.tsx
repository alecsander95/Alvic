"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Testimonios", href: "#testimonios" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const servicios = document.getElementById("servicios")
      const experiencia = document.getElementById("experiencia")
      const testimonios = document.getElementById("testimonios")
      const ctaFinal = document.getElementById("cta-final")

      if (!servicios) {
        setIsScrolled(false)
        return
      }

      const headerOffset = 80
      const current = window.scrollY + headerOffset
      const serviciosTop = servicios.offsetTop
      const experienciaTop = experiencia ? experiencia.offsetTop : Infinity
      const testimoniosTop = testimonios ? testimonios.offsetTop : Infinity
       const ctaFinalTop = ctaFinal ? ctaFinal.offsetTop : Infinity

      if (current < serviciosTop) {
        setIsScrolled(false)
      } else if (current < experienciaTop) {
        setIsScrolled(true)
      } else if (current < testimoniosTop) {
        setIsScrolled(false)
      } else if (current < ctaFinalTop) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <header className="fixed left-1/2 top-[20px] flex w-[95%] -translate-x-1/2 items-center justify-between px-2.5 py-[15px] rounded-[40px] md:w-[85%] md:px-6 md:py-[15px] z-50 border border-[rgba(117,115,114,0.15)] bg-[rgba(255,255,255,0.25)] shadow-none [backdrop-filter:blur(10px)] transition-colors duration-300">
      <div className="mx-auto w-full flex max-w-[1280px] items-center justify-between px-6 py-0">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src={isScrolled ? "/images/logo-oscuro.png" : "/images/logo-blanco.png"}
            alt="Alvic logo"
            width={160}
            height={50}
            className="h-auto w-[160px] shrink-0"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all ${
                isScrolled
                  ? "text-primary hover:font-semibold"
                  : "text-primary-foreground/80 hover:font-semibold"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta-final"
            className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-all ${
              isScrolled
                ? "bg-accent text-white hover:scale-105 hover:bg-accent/90"
                : "border border-white bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white"
            }`}
          >
            Solicitar Cotización
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${
            isScrolled ? "text-[#0753A0]" : "text-primary-foreground"
          }`}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-secondary bg-primary px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta-final"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-transparent hover:text-accent hover:border-white"
            >
              Solicitar Cotización
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
