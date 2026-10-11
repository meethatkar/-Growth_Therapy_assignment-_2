import Image from "next/image";
import Link from "next/link";
import ParallaxScrollEffect from "@/animations/ParallaxScrollEffect";

const HeroSection = () => {
  return (
    <section className="w-full bg-brand-bg flex justify-center">
      <div className="max-w-[1900px] w-full px-8 lg:px-14 pt-8 pb-20 flex flex-col md:flex-row relative overflow-hidden md:min-h-screen mx-auto">
        {/* Left side Image */}
        <ParallaxScrollEffect
          className="w-full md:w-[38%] h-[78vh] z-10"
          speed={0.15}
        >
          <Image
            src="/images/Dr. Maya Reynolds.png"
            alt="Dr. Maya Reynolds, PsyD — Anxiety & Trauma Therapist in Santa Monica"
            fill
            priority
            className="object-cover object-top"
          />
        </ParallaxScrollEffect>

        {/* Right side Content */}
        <div className="w-full md:w-[55%] lg:w-[50%] h-auto md:h-[78vh] flex flex-col justify-between pl-0 md:pl-12 lg:pl-16 pt-12 md:pt-0 z-10 max-w-2xl">
          {/* Top: Eyebrow */}
          <p className="text-xs font-semibold tracking-widest text-brand-gray uppercase leading-relaxed max-w-[300px]">
            In-person therapy in Santa Monica & telehealth across CA
          </p>

          {/* Middle: Heading & Description */}
          <div className="my-auto py-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-[4.25rem] leading-[1.15] text-brand-dark font-normal mb-8 max-w-[660px]">
              Anxiety therapy for adults who are ready to feel{" "}
              <span className="font-script text-5xl md:text-6xl lg:text-[5rem] text-brand-teal align-middle -ml-1 inline-block">
                at ease.
              </span>
            </h1>
            <p className="text-brand-dark text-sm md:text-base font-light max-w-[540px]">
              Licensed clinical psychologist specializing in anxiety, trauma,
              and burnout for high-achieving adults in Santa Monica, CA.
            </p>
          </div>

          {/* Bottom: CTA */}
          <div>
            <Link
              href="#contact"
              className="text-xs font-bold tracking-widest uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors inline-block"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>

        {/* Right edge decorative image (partial) */}
        <ParallaxScrollEffect
          className="hidden md:block absolute right-0 top-[41%] w-[10%] h-[40vh] opacity-70 z-0"
          speed={0.25}
        >
          <Image
            src="/images/office1.jpeg"
            alt="Therapy office background"
            fill
            className="object-cover object-left"
          />
        </ParallaxScrollEffect>
      </div>
    </section>
  );
};

export default HeroSection;
