import Link from "next/link";
import { footerLinks } from "../data/footerData";

const Footer = () => {
  return (
    <footer className="w-full bg-brand-white pt-24 pb-0 flex flex-col relative">
      <div className="w-full max-w-[1900px] mx-auto px-8 md:px-16 lg:px-24 mb-24 flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Brand & Intro */}
        <div className="w-full lg:max-w-md flex flex-col">
          <Link href="/" className="flex flex-col mb-8">
            <span className="font-serif text-4xl lg:text-5xl font-normal tracking-tight text-brand-dark leading-none">
              Dr. Maya Reynolds
            </span>
            <span className="text-[0.7rem] tracking-[0.3em] text-brand-teal mt-2 font-semibold uppercase">
              PsyD · Clinical Psychologist
            </span>
          </Link>
          <p className="text-[1rem] leading-relaxed text-brand-gray">
            Therapy for anxiety, trauma, and burnout in Santa Monica, CA.
            In-person sessions at my quiet office in Santa Monica, and secure
            telehealth for clients across California—whatever works best for
            you.
          </p>
        </div>

        {/* Links: Navigate & Contact */}
        <div className="flex flex-col sm:flex-row items-start gap-16 md:gap-24 lg:gap-32">
          {/* Navigate */}
          <div className="flex flex-col">
            <h4 className="text-[1rem] font-semibold tracking-[0.25em] text-brand-dark uppercase mb-8">
              Navigate
            </h4>
            <ul className="flex flex-col space-y-3 text-[0.85rem] font-light text-brand-gray">
              {footerLinks.navigate.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-dark transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col max-w-sm">
            <h4 className="text-[1rem] font-semibold tracking-[0.25em] text-brand-dark uppercase mb-8">
              Contact
            </h4>
            <div className="flex flex-col space-y-6 text-[0.85rem] font-light text-brand-gray">
              <div className="flex flex-col space-y-1">
                {footerLinks.contact.address.map((line, idx) => (
                  <span key={idx}>{line}</span>
                ))}
              </div>
              <div className="flex flex-col space-y-1">
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="hover:text-brand-dark transition-colors"
                >
                  {footerLinks.contact.email}
                </a>
                <a
                  href={`tel:${footerLinks.contact.phone.replace(/\./g, "-")}`}
                  className="hover:text-brand-dark transition-colors"
                >
                  {footerLinks.contact.phone}
                </a>
              </div>
              <p className="leading-relaxed">{footerLinks.contact.serving}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-brand-teal/70 py-4 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1900px] mx-auto flex flex-col md:flex-row text-[0.7rem] font-light text-white opacity-90">
          <p>
            © 2025 Dr. Maya Reynolds, PsyD · Terms | Privacy Policy | Santa
            Monica, CA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
