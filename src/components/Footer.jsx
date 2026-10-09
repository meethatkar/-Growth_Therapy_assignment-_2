import Link from "next/link";
import { footerLinks } from "../data/footerData";
import { teamMembers } from "../data/teamData";

const Footer = () => {
  return (
    <footer className="w-full bg-brand-white pt-24 pb-0 flex flex-col relative">
      <div className="w-full max-w-[1900px] mx-auto px-8 md:px-16 lg:px-24 mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Brand & Intro (Col span 5) */}
        <div className="col-span-1 md:col-span-5 flex flex-col">
          <Link href="/" className="flex flex-col mb-8">
            <span className="font-serif text-4xl lg:text-5xl font-normal tracking-tight text-brand-dark leading-none">
              Conejo Valley
            </span>
            <span className="text-[0.7rem] tracking-[0.3em] text-brand-teal mt-2 font-semibold uppercase">
              Family Counseling
            </span>
          </Link>
          <p className="text-[0.85rem] font-light leading-relaxed text-brand-gray max-w-sm">
            We want to make getting started simple. You're welcome to come into
            our office in Newbury Park or schedule virtual appointments from
            anywhere in CA — whatever works best for you.
          </p>
        </div>

        {/* Navigate (Col span 2) */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <h4 className="text-[0.65rem] font-semibold tracking-[0.25em] text-brand-dark uppercase mb-8">
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

        {/* Our Team (Col span 2) */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <h4 className="text-[0.65rem] font-semibold tracking-[0.25em] text-brand-dark uppercase mb-8">
            Our Team
          </h4>
          <ul className="flex flex-col space-y-3 text-[0.85rem] font-light text-brand-gray">
            {teamMembers.map((member) => (
              <li key={member}>
                <Link
                  href="#team"
                  className="hover:text-brand-dark transition-colors"
                >
                  {member}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact (Col span 3) */}
        <div className="col-span-1 md:col-span-3 flex flex-col">
          <h4 className="text-[0.65rem] font-semibold tracking-[0.25em] text-brand-dark uppercase mb-8">
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

      {/* Bottom Bar */}
      <div className="w-full bg-brand-teal/70 py-4 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-[0.7rem] font-light text-white opacity-90">
          <p>
            Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
