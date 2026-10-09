import { specialtiesData } from "../data/specialtiesData";

const SpecialtiesIncludeSection = () => {
  return (
    <section className="w-full bg-brand-white py-24 px-8 md:px-16 lg:px-24 border-t border-brand-border/30 md:min-h-screen flex items-center">
      <div className="w-full max-w-[1900px] mx-auto flex flex-col md:flex-row gap-16 md:gap-8 py-12 md:py-0">
        {/* Left Heading */}
        <div className="w-full md:w-1/3">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-normal flex flex-col leading-tight">
            <span>Our</span>
            <span className="font-script text-6xl md:text-[5.5rem] text-brand-teal -mt-2 -ml-2">
              specialties
            </span>
            <span className="-mt-2">include...</span>
          </h2>
        </div>

        {/* Right Grid */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {specialtiesData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-serif text-2xl font-normal text-brand-dark mb-6">
                {item.title}
              </h3>
              <p className="text-[0.85rem] font-light leading-relaxed text-brand-gray mb-8 flex-grow">
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
