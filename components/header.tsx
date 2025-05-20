"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cloud, Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";

export function Header() {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour le scroll smooth
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    // Vérifier si le lien contient une ancre et si nous sommes sur la page d'accueil
    if (targetId.startsWith("#") && isHomePage) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Fermer le menu si ouvert
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href={isHomePage ? "/#head" : "/"}
          className="flex items-center gap-2"
          onClick={(e) => handleSmoothScroll(e, "#head")}
        >
          <Cloud className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-xl">AlgCloud</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href={isHomePage ? "/#services" : "/services"}
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            onClick={(e) => handleSmoothScroll(e, "#services")}
          >
            Services
          </Link>
          <Link
            href={isHomePage ? "/#pricing" : "/pricing-calculator"}
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            onClick={(e) => handleSmoothScroll(e, "#pricing")}
          >
            Pricing
          </Link>
          <Link
            href={isHomePage ? "/#about" : "/about"}
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            onClick={(e) => handleSmoothScroll(e, "#about")}
          >
            About
          </Link>
          <Link
            href={isHomePage ? "/#contact" : "/contact"}
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="https://console.hostifer.me/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-base">
              Get Started
            </Button>
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 top-16 z-50 bg-white p-4 flex flex-col gap-4">
          <Link
            href="#services"
            className="text-lg font-medium p-2 hover:bg-gray-100 rounded"
            onClick={(e) => handleSmoothScroll(e, "#services")}
          >
            Services
          </Link>
          <Link
            href="#pricing"
            className="text-lg font-medium p-2 hover:bg-gray-100 rounded"
            onClick={(e) => handleSmoothScroll(e, "#pricing")}
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium p-2 hover:bg-gray-100 rounded"
            onClick={(e) => handleSmoothScroll(e, "#about")}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium p-2 hover:bg-gray-100 rounded"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Link
              href="https://console.hostifer.me/"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
