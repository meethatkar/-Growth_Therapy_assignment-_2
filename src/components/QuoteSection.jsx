import Image from "next/image";

const QuoteSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-full h-[50vh] md:h-[66vh] relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/quote_bg.png"
            alt="Children running on beach at dusk"
            fill
            className="object-cover object-center"
          />
          {/* Optional overlay for better text readability if the generated image is too bright */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1900px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl text-left">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] text-white font-normal leading-normal md:leading-[1.4]">
              You deserve a place where your story is heard,
              <br className="hidden md:block" />
              valued, and understood.{" "}
              <span className="italic font-light">
                Nothing will be too heavy
                <br className="hidden md:block" />
                for us to carry together.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
