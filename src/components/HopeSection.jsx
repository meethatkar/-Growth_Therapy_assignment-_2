import Image from "next/image";

const HopeSection = () => {
  return (
    <section className="w-full bg-brand-bg flex justify-center overflow-hidden">
      <div className="max-w-[1900px] w-full pl-8 md:pl-16 lg:pl-24 pr-0 flex flex-col md:flex-row items-center md:min-h-screen mx-auto">
        {/* Left Text Content */}
        <div className="w-full md:w-[70%] flex flex-col justify-center pr-8 md:pr-16 lg:pr-20 py-16 md:py-24">
          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-brand-dark font-normal leading-[1.15] mb-16">
              You&apos;re high-functioning on the outside—but exhausted, tightly
              wound, and quietly struggling on the inside.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-[1.3rem] leading-relaxed text-brand-gray font-light">
              <div>
                <p className="text-base font-medium tracking-widest uppercase mb-4 text-brand-dark leading-relaxed">
                  At Dr. Maya Reynolds&apos; Santa Monica practice, you
                  don&apos;t have to keep pushing through alone.
                </p>
                <p>
                  Many of the people I work with are thoughtful, self-aware, and
                  accomplished—yet internally feel stuck in overthinking,
                  emotionally on edge, or exhausted by the relentless pressure
                  to perform. Therapy offers a space to finally slow down,
                  understand what&apos;s driving the distress, and build
                  something more sustainable.
                </p>
              </div>
              <div>
                <p>
                  Whether you&apos;re navigating anxiety that won&apos;t quiet,
                  the lingering weight of past experiences, or burnout that has
                  crept into every corner of your life—your experience is real,
                  valid, and worth addressing. My approach is warm, grounded,
                  and evidence-based, drawing on CBT, EMDR, mindfulness, and
                  body-oriented techniques to help you heal at every level—not
                  just manage symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-[30%] h-[50vh] md:h-[78vh] relative my-auto">
          <Image
            src="/images/office1.jpeg"
            alt="Dr. Maya Reynolds therapy office in Santa Monica"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HopeSection;
