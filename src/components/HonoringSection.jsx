import Image from "next/image";

const HonoringSection = () => {
  return (
    <section className="w-full bg-brand-white flex justify-center px-8 md:px-0">
      <div className="max-w-[1700px] w-full py-24 md:py-0 flex flex-col md:flex-row items-center md:items-stretch gap-16 md:gap-24 md:min-h-screen mx-auto">
        {/* Left Image */}
      <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto h-[50vh] md:h-auto relative flex-grow">
        <Image
          src="/images/family_ocean.png"
          alt="Family walking into ocean"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pr-24 lg:pr-32 flex flex-col justify-center py-12 md:py-0">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-brand-dark font-normal leading-snug max-w-lg">
          Honoring where you've been <span className="font-script text-5xl md:text-[4.5rem] text-brand-teal inline-block transform translate-y-2">&amp;</span> helping shape where you're headed.
        </h2>
        </div>
      </div>
    </section>
  );
};

export default HonoringSection;
