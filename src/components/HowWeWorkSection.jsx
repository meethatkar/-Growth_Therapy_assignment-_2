import Image from "next/image";

const HowWeWorkSection = () => {
  return (
    <section className="w-full bg-[#EDE9E1] flex justify-center">
      <div className="max-w-[1900px] w-full flex flex-col md:flex-row relative md:min-h-screen items-stretch mx-auto">
        <div className="w-full md:w-[70%] px-8 md:px-16 lg:pl-24 lg:pr-32 pb-16 md:pb-24 pt-16 md:pt-24 flex flex-col justify-between">
          <div>
            <h4 className="text-[0.65rem] font-semibold tracking-[0.25em] text-brand-dark uppercase">
              My approach
            </h4>
          </div>

          <div className="my-auto py-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-brand-dark font-normal leading-[1.1] mb-16 max-w-3xl">
              Therapy that goes beneath the surface.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-[1.05rem] leading-[1.8] text-brand-dark font-light">
              <div className="pr-0 md:pr-4">
                <p className="font-medium uppercase tracking-[0.1em] mb-8 text-[0.8rem] leading-[1.6]">
                  I take a warm, collaborative, and grounded approach—
                  structured enough to feel supportive, while still leaving
                  space for reflection and depth.
                </p>
                <p>
                  My work integrates evidence-based methods including
                  cognitive-behavioral therapy (CBT), EMDR, mindfulness-based
                  practices, and body-oriented techniques. This allows us to
                  address both the emotional and physiological dimensions of
                  what you&apos;re experiencing—not just talk about it, but
                  genuinely shift it.
                </p>
              </div>
              <div>
                <p>
                  I believe therapy works best when you feel respected,
                  understood, and actively involved in the process. My goal is
                  not just symptom relief, but helping you develop real insight,
                  resilience, and a stronger relationship with yourself over
                  time. If you&apos;re ready to do the work, I&apos;m here to
                  walk alongside you— at whatever pace feels right.
                </p>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#about"
              className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors"
            >
              Learn more about my approach
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[30%] h-[50vh] md:h-[80vh] my-auto relative">
          <Image
            src="/images/Dr. Maya Reynolds.png"
            alt="Dr. Maya Reynolds, licensed psychologist in Santa Monica"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
