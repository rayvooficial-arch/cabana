import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BookingButton } from './BookingButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Acomodações', href: '#acomodacoes' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Lazer', href: '#estrutura' },
    { label: 'Adicionais', href: '#personalize-experiencia' },
    { label: 'Tarifas', href: '#tarifario' },
    { label: 'Localização', href: '#como-chegar' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#14241A]/96 backdrop-blur-md py-3 shadow-lg border-b border-white/10'
          : 'bg-gradient-to-b from-black/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        <a href="#inicio" className="shrink-0">
          <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white block leading-tight">
            Cabana das Mansões
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#D8B466]">
            Chácara das Mansões • Campo Grande/MS
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-wider font-semibold text-white/80 hover:text-[#D8B466] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block shrink-0">
          <BookingButton
            id="nav-reservation-button"
            label="VER DISPONIBILIDADE"
            variant="nav"
            size="sm"
            className="rounded-full"
          />
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="xl:hidden text-white p-2 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#14241A] border-t border-white/10 px-5 py-5">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border-b border-white/10 text-sm font-medium text-white/90"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <BookingButton
            id="mobile-menu-reserve-btn"
            label="VER DISPONIBILIDADE"
            variant="gold"
            size="md"
            className="w-full mt-5"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};
