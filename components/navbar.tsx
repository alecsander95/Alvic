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
    <header
      className={`fixed z-50 shadow-none transition-colors duration-300 flex flex-col md:flex-row items-stretch md:items-center justify-start md:justify-between ${
        mobileOpen
          ? "inset-0 w-full h-screen rounded-none px-6 py-6 border border-secondary bg-primary [backdrop-filter:none]"
          : "left-1/2 top-[20px] w-[90%] xl:w-[85%] -translate-x-1/2 rounded-[40px] px-2.5 py-[15px] md:px-6 md:py-[15px] border border-[rgba(117,115,114,0.15)] bg-[rgba(255,255,255,0.25)] [backdrop-filter:blur(10px)]"
      }`}
    >
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
        <nav className="hidden items-center gap-8 lg:flex">
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
          className={`lg:hidden ${
            mobileOpen
              ? "text-white"
              : isScrolled
                ? "text-[#0753A0]"
                : "text-primary-foreground"
          }`}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden w-full flex flex-col px-6 pb-8 pt-0 mt-[60px]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-semibold text-white tracking-tight transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#cta-final"
            onClick={() => setMobileOpen(false)}
            className="mt-[100px] inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-transparent hover:text-accent hover:border-white"
          >
            Solicitar Cotización
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-8 border-t border-primary-foreground/10 pt-4">
            <div className="flex flex-col items-start gap-1">
              <p className="text-xs text-primary-foreground/40">
                {"© 2026 Alvic. Todos los derechos reservados."}
              </p>
              <p className="text-xs text-primary-foreground/40">
                Seguridad y conectividad de confianza
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
