"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "../data/navData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-14 flex justify-center items-center z-50 bg-brand-bg relative">
      <div className="max-w-[1900px] w-full flex justify-between items-center mx-auto">
        <div className="flex flex-col z-50">
          <Link
            href="/"
            className="flex flex-col"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-serif text-3xl font-normal tracking-tight text-brand-dark leading-none">
              Dr. Maya Reynolds
            </span>
            <span className="text-[0.65rem] tracking-[0.25em] text-brand-teal mt-1 font-semibold uppercase">
              PsyD · Clinical Psychologist
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest text-brand-gray">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-brand-dark transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 px-6 py-4 border border-brand-dark rounded-[100%] text-brand-dark hover:bg-brand-dark hover:text-white transition-colors uppercase"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden z-50 p-2 text-brand-dark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8 font-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 font-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-bg z-40 transform transition-transform duration-300 ease-in-out flex flex-col justify-between pt-32 pb-12 px-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-light tracking-wide text-brand-dark flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              {link.hasDropdown && (
                <svg
                  className="w-4 h-4 ml-2 text-brand-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <Link
            href="#contact"
            className="w-full max-w-[200px] text-center px-6 py-3 border border-brand-dark rounded-[50px] text-brand-dark text-sm tracking-widest uppercase"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
