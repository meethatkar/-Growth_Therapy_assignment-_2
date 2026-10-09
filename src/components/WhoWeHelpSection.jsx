import Image from "next/image";
import { helpData } from "../data/helpData";

const WhoWeHelpSection = () => {

  return (
    <section className="w-full bg-brand-white py-24 px-8 md:px-16 lg:px-24 md:min-h-screen flex items-center">
      <div className="w-full max-w-[1700px] mx-auto py-12 md:py-0">
        <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-normal mb-16 flex items-center">
          Who we <span className="font-script text-6xl md:text-[5.5rem] text-brand-teal ml-2 -mt-4">help</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {helpData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full aspect-square relative mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-3xl font-normal text-brand-dark mb-4">
                {item.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-brand-gray">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
