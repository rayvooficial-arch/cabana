import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { includedExperiences } from '../data/experiences';

interface NavbarProps {
  onOpenBooking: (accommodationId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Acomodações', href: '#acomodacoes' },
    ...(includedExperiences.length > 0 ? [{ label: 'Estrutura', href: '#estrutura' }] : []),
    { label: 'Tarifário', href: '#tarifario' },
    { label: 'Como Chegar', href: '#como-chegar' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#14241A]/95 backdrop-blur-md py-3.5 shadow-xl border-b border-[#2d4f3b]/30'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            id="nav-logo-link"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-[#FAF7F2] uppercase group-hover:text-[#E8D4A2] transition-colors">
              Cabana das Mansões
            </span>
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#C29B48] flex items-center gap-1 font-medium">
              <Sparkles className="w-2.5 h-2.5 inline text-[#C29B48]" />
              Spa em Meio à Natureza
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-[#FAF7F2]/80 hover:text-[#C29B48] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C29B48] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              id="nav-reservation-button"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C29B48] hover:bg-[#d6af57] text-[#14241A] font-semibold text-xs tracking-wider uppercase shadow-lg shadow-black/20 hover:shadow-[#C29B48]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#14241A]" />
              <span>Reservar</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="lg:hidden p-2 rounded-lg text-[#FAF7F2] hover:bg-white/10 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="lg:hidden bg-[#14241A] border-b border-[#2d4f3b]/50 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-[#FAF7F2] hover:text-[#C29B48] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              id="mobile-menu-reserve-btn"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C29B48] text-[#14241A] font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#d6af57] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#14241A]" />
              <span>Consultar Disponibilidade / Reservar</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
