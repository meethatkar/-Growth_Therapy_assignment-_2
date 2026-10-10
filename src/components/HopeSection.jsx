import Image from "next/image";

const HopeSection = () => {
  return (
    <section className="w-full bg-brand-bg flex justify-center overflow-hidden">
      <div className="max-w-[1900px] w-full pl-8 md:pl-16 lg:pl-24 pr-0 flex flex-col md:flex-row items-center md:min-h-screen mx-auto">
        {/* Left Text Content */}
        <div className="w-full md:w-[70%] flex flex-col justify-center pr-8 md:pr-16 lg:pr-20 py-16 md:py-24">
          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-brand-dark font-normal leading-[1.15] mb-16">
              You're holding onto hope that life can be better than it is right
              now.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-[1.3rem] leading-relaxed text-brand-gray font-light">
              <div>
                <p className="text-base font-medium tracking-widest uppercase mb-4 text-brand-dark leading-relaxed">
                  At Conejo Valley Family Counseling we want to make that hope a
                  reality.
                </p>
                <p>
                  Whether you're an adult seeking personal growth, looking to
                  work through your trauma, a couple working on your
                  relationship, or a parent looking for support for your child,
                  we provide a compassionate and safe space to help you navigate
                  all of life's ups and downs.
                </p>
              </div>
              <div>
                <p>
                  First and foremost, we believe what you're going through is
                  real, valid, and worthy of support. Our team offers clients in
                  the Newbury Park area and across CA an environment to discover
                  a new life and a deeper sense of self in the midst of their
                  struggles. As we tap into the power of connection and
                  understanding, you can find your footing again and take a
                  transformative path forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-[30%] h-[50vh] md:h-[78vh] relative my-auto">
          <Image
            src="/images/ocean_hope.png"
            alt="Ocean waves on beach"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HopeSection;
