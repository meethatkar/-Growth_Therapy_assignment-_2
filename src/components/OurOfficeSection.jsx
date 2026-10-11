import Image from "next/image";

const OurOfficeSection = () => {
  return (
    <section className="w-full bg-brand-bg py-24 px-8 md:px-16 lg:px-24 border-t border-brand-border/30 min-h-screen flex items-center">
      <div className="w-full max-w-[1900px] mx-auto py-12 md:py-0">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="font-serif text-[2.8rem] md:text-5xl lg:text-[4rem] text-brand-dark font-normal leading-[1.1] mb-8 flex flex-col items-center">
            <span>Our office</span>
            <span className="font-script text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] text-brand-teal inline-block transform -translate-y-2 md:-translate-y-4">
              space
            </span>
          </h2>
          <p className="max-w-2xl text-[0.95rem] md:text-[1.05rem] font-light leading-[1.8] text-brand-gray">
            Located in Santa Monica, our practice is designed to be a calm, comfortable, and private environment. Whether you prefer in-person sessions or hybrid flexibility, our space offers a warm and welcoming atmosphere tailored to support your well-being and sense of safety at every step of your healing journey.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 flex flex-col group">
            <div className="w-full h-[40vh] md:h-[50vh] lg:h-[55vh] relative overflow-hidden mb-8">
              <Image
                src="/images/office1.jpeg"
                alt="Comfortable therapy office seating in Santa Monica"
                fill
                className="object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-[1.6rem] md:text-[2rem] font-normal text-brand-dark mb-4">
              A Grounding Environment
            </h3>
            <p className="text-[0.95rem] md:text-[1.05rem] font-light leading-[1.8] text-brand-gray md:pr-8">
              Your physical surroundings play a crucial role in regulating your nervous system. With its warm lighting, organic textures, and an uncluttered aesthetic, this space provides a calming foundation that allows you to exhale, slow down, and feel truly present during our work together.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col group">
            <div className="w-full h-[40vh] md:h-[50vh] lg:h-[55vh] relative overflow-hidden mb-8 md:mt-16">
              <Image
                src="/images/office2.jpeg"
                alt="Therapy office interior space"
                fill
                className="object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-[1.6rem] md:text-[2rem] font-normal text-brand-dark mb-4">
              A Safe, Private Space
            </h3>
            <p className="text-[0.95rem] md:text-[1.05rem] font-light leading-[1.8] text-brand-gray md:pr-8">
              Healing happens when you feel entirely secure. Thoughtfully designed for confidentiality and comfort, our seating area invites open, honest conversation without the typical clinical feel. It is a warm refuge that gives you the freedom to explore the most challenging aspects of your journey in complete safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfficeSection;
