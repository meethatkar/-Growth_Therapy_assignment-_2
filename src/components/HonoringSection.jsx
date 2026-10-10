import Image from "next/image";

const HonoringSection = () => {
  return (
    <section className="w-full bg-brand-white flex justify-center py-16 md:py-32 lg:py-40">
      <div className="max-w-[1900px] w-full flex flex-col md:flex-row items-center md:items-end mx-auto">
        {/* Left Image */}
        <div className="w-full md:w-[55%] aspect-[4/3] md:aspect-[1.3] relative">
          <Image
            src="/images/office2.jpeg"
            alt="Dr. Maya Reynolds therapy office interior — a calm, grounded space in Santa Monica"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[45%] pb-0 md:pb-4 px-8 md:px-12 lg:px-20 xl:px-24 mt-12 md:mt-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[3rem] text-brand-dark font-normal leading-[1.3] max-w-xl">
            Honoring where you've been
            <br className="hidden md:block" />
            <span className="font-script text-5xl md:text-[5rem] lg:text-[3rem] text-brand-teal font-light inline-block transform translate-y-3 lg:translate-y-1 mr-3">
              &amp;
            </span>
            helping shape where you're headed.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HonoringSection;
