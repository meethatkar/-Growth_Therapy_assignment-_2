import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-brand-bg flex justify-center">
      <div className="max-w-[1900px] w-full px-8 lg:px-14 pt-8 pb-20 flex flex-col md:flex-row relative overflow-hidden md:min-h-screen mx-auto">
        {/* Left side Image */}
        <div className="w-full md:w-[38%] h-[78vh] relative z-10">
          <Image
            src="/images/hero_family.png"
            alt="Family on the beach"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right side Content */}
        <div className="w-full md:w-[55%] lg:w-[50%] h-auto md:h-[78vh] flex flex-col justify-between pl-0 md:pl-12 lg:pl-16 pt-12 md:pt-0 z-10 max-w-2xl">
          {/* Top: Eyebrow */}
          <p className="text-xs font-semibold tracking-widest text-brand-gray uppercase leading-relaxed max-w-[300px]">
            Online & in-person counseling in Newbury Park & across CA
          </p>

          {/* Middle: Heading & Description */}
          <div className="my-auto py-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-[4.25rem] leading-[1.15] text-brand-dark font-normal mb-8 max-w-[660px]">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-script text-5xl md:text-6xl lg:text-[5rem] text-brand-teal align-middle -ml-1 inline-block">
                thrive.
              </span>
            </h1>
            <p className="text-brand-dark text-sm md:text-base font-light max-w-[540px]">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>
          </div>

          {/* Bottom: CTA */}
          <div>
            <Link
              href="#book"
              className="text-xs font-bold tracking-widest uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors inline-block"
            >
              Book an appointment
            </Link>
          </div>
        </div>

        {/* Right edge decorative image (partial) */}
        <div className="hidden md:block absolute right-0 top-[41%] w-[10%] h-[40vh] opacity-80 z-0">
          <Image
            src="/images/ocean_hope.png"
            alt="Ocean background"
            fill
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
