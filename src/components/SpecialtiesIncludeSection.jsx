import { specialtiesData } from "../data/specialtiesData";

const SpecialtiesIncludeSection = () => {
  return (
    <section className="w-full bg-brand-white py-24 px-8 md:px-16 lg:px-24 border-t border-brand-border/30 md:min-h-screen flex items-center">
      <div className="w-full max-w-[1900px] mx-auto flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-24 py-12 md:py-0">
        {/* Left Heading */}
        <div className="w-full md:w-[35%] lg:w-[30%]">
          <h2 className="font-serif text-[2.8rem] md:text-5xl lg:text-[3.5rem] text-brand-dark font-normal leading-[1.1]">
            Our{" "}
            <span className="font-script text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] text-brand-teal inline-block transform translate-y-3 md:translate-y-5 -ml-2">
              specialties
            </span>
            <br />
            <span className="inline-block mt-2 md:mt-4">include...</span>
          </h2>
        </div>

        {/* Right Grid */}
        <div className="w-full md:w-[65%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-20 md:gap-y-32">
          {specialtiesData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-serif text-[1.6rem] md:text-3xl font-normal text-brand-dark mb-6">
                {item.title}
              </h3>
              <p className="text-[0.95rem] md:text-[1.05rem] font-light leading-[1.8] text-brand-dark mb-12 flex-grow pr-0 md:pr-4">
                {item.desc}
              </p>
              <div>
                <a
                  href="#learn-more"
                  className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesIncludeSection;
