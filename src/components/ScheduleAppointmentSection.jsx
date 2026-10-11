import Image from "next/image";
import ParallaxScrollEffect from "@/animations/ParallaxScrollEffect";

const ScheduleAppointmentSection = () => {
  return (
    <section className="w-full bg-[#FAF9F5] flex justify-center overflow-hidden">
      <div className="max-w-[1900px] w-full flex flex-col lg:flex-row items-center justify-between mx-auto py-16 md:py-24 lg:py-32">
        {/* Left Image */}
        <ParallaxScrollEffect
          className="hidden lg:block w-[12%] xl:w-[14%] h-[40vh] lg:h-[45vh] self-end"
          speed={0.25}
        >
          <Image
            src="/images/office1.jpeg"
            alt="Santa Monica therapy office detail"
            fill
            className="object-cover object-left"
          />
        </ParallaxScrollEffect>

        {/* Text Content */}
        <div className="w-full lg:w-[46%] flex flex-col justify-center px-8 md:px-16 lg:px-0 lg:pl-10 xl:pl-16 py-12 lg:py-0">
          <h4 className="text-[0.65rem] font-semibold tracking-[0.25em] text-brand-dark uppercase mb-16">
            Schedule an appointment
          </h4>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-brand-dark font-normal leading-[1.1] mb-12 max-w-2xl">
            Find the clarity and calm you&apos;ve been
            <br className="hidden md:block" />
            looking for{" "}
            <span className="font-script text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] text-brand-teal inline-block transform translate-y-[1%] md:translate-y-[3%]">
              here
            </span>
          </h2>

          <div className="text-[0.95rem] md:text-[1.05rem] font-light leading-[1.8] text-brand-dark space-y-6 max-w-xl mb-12 lg:pr-8">
            <p>
              Taking the first step toward therapy is courageous—and finding the
              right fit makes all the difference. I offer a warm, structured
              space in Santa Monica and secure telehealth sessions for clients
              across California. My office is designed to feel calm and
              grounding, with natural light and an uncluttered environment where
              you can genuinely exhale.
            </p>
            <p>
              I work with adults navigating anxiety, trauma, and burnout. If
              you&apos;re ready to understand what&apos;s driving the distress
              and build a more sustainable path forward, I&apos;d love to
              connect.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-block w-auto px-10 py-3.5 border border-brand-dark rounded-[100%] text-[0.65rem] font-semibold tracking-[0.2em] text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 uppercase"
            >
              Request a consultation
            </a>
          </div>
        </div>

        {/* Right Image */}
        <ParallaxScrollEffect
          className="w-full lg:w-[36%] xl:w-[38%] h-[50vh] lg:h-[75vh] mt-12 lg:mt-0"
          speed={0.18}
        >
          <Image
            src="/images/schedule_consultation.png"
            alt="Dr. Maya Reynolds, PsyD — anxiety and trauma therapist in Santa Monica, CA"
            fill
            className="object-cover object-center"
          />
        </ParallaxScrollEffect>
      </div>
    </section>
  );
};

export default ScheduleAppointmentSection;
