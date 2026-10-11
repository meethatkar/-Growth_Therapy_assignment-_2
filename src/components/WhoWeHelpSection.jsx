import Image from "next/image";
import { helpData } from "../data/helpData";
import ParallaxScrollEffect from "@/animations/ParallaxScrollEffect";

const WhoWeHelpSection = () => {
  return (
    <section className="w-full bg-brand-white py-24 px-8 md:px-16 lg:px-24 md:min-h-screen flex items-center">
      <div className="w-full max-w-[1900px] mx-auto py-12 md:py-0">
        <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-normal mb-16 flex items-center">
          Who I{" "}
          <span className="font-script text-6xl md:text-[5.5rem] text-brand-teal ml-2 -mt-4">
            work with
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 md:w-11/12 ml-auto">
          {helpData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <ParallaxScrollEffect
                className="w-full aspect-square mb-8"
                speed={0.15 + index * 0.05}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </ParallaxScrollEffect>
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
