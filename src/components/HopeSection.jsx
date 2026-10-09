import Image from "next/image";

const HopeSection = () => {
  return (
    <section className="w-full bg-brand-bg flex justify-center">
      <div className="max-w-[1900px] w-full py-24 flex flex-col md:flex-row items-stretch md:min-h-screen mx-auto">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-8 md:px-16 lg:px-24 py-12 md:py-0">
          <div className="max-w-xl py-12">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-normal leading-tight mb-12">
              You're holding onto hope that life can be better than it is right
              now.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-[0.9rem] leading-relaxed text-brand-gray font-light">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-brand-dark leading-relaxed">
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
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-[70vh] relative">
          <Image
            src="/images/ocean_hope.png"
            alt="Ocean waves on beach"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HopeSection;
