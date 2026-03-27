"use client";

import { memo, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnoucementBar from "./annoucement-bar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/why", label: "Why Prorevv" },
    { href: "/contact", label: "Get in Touch" },
  ];

  // Debounce scroll handler to prevent excessive re-renders
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when link is clicked
  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      window.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <AnnoucementBar />
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-300 px-3 sm:px-4 md:px-6 ${
          scrolled ? "bg-black backdrop-blur-md top-0" : "bg-transparent top-[50px]"
        }`}
      >
        <div
          className={`max-w-[1440px] mx-auto flex items-center justify-between py-3 sm:py-4 md:py-5 ${
            scrolled ? "border-[0]" : "border-b border-[#646464]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            title="Logo"
            aria-label="Logo"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={300}
              height={80}
              priority
              className="w-[150px] md:w-[300px] h-auto"
            />
          </Link>

          {/* Navigation - Desktop only */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#D80007] transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Hamburger/Close Icon */}
          <button
            className="md:hidden flex flex-col gap-1.5 relative w-7 h-7 justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              // Close (X) Icon
              <>
                <span className="w-full h-0.5 bg-white absolute rotate-45" />
                <span className="w-full h-0.5 bg-white absolute -rotate-45" />
              </>
            ) : (
              // Hamburger Icon
              <>
                <span className="w-full h-0.5 bg-white transition-all duration-300" />
                <span className="w-full h-0.5 bg-white transition-all duration-300" />
                <span className="w-full h-0.5 bg-white transition-all duration-300" />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-13 bg-black z-40 md:hidden overflow-y-auto"
          onClick={() => setMenuOpen(false)}
        >
          <nav className="flex flex-col gap-2 p-4 pt-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1 text-base text-white text-[16px] hover:text-[#D80007] hover:bg-white/15 rounded-lg transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default memo(Header);