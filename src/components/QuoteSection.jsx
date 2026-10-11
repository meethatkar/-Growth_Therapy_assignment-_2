import Image from "next/image";

const QuoteSection = () => {
  return (
    <section className="w-full bg-brand-white py-16 md:py-24">
      <div className="w-full h-[50vh] md:h-[66vh] relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/office2.jpeg"
            alt="Calm therapy office space in Santa Monica"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1900px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl text-left">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] text-white font-normal leading-normal md:leading-[1.4]">
              You deserve a space where you&apos;re truly seen,
              <br className="hidden md:block" />
              not managed.{" "}
              <span className="italic font-light">
                Nothing you&apos;ve been through
                <br className="hidden md:block" />
                is too much to bring here.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
