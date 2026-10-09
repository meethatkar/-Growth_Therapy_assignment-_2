import Image from "next/image";

const QuoteSection = () => {
  return (
    <section className="w-full h-[60vh] md:min-h-screen relative flex items-center justify-center overflow-hidden py-24 md:py-0">
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
      
      <div className="relative z-10 max-w-4xl px-8 text-center md:text-left md:ml-[-10%]">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-normal md:leading-relaxed">
          You deserve a place where your story is heard,<br />
          valued, and understood. <span className="italic font-light">Nothing will be too heavy<br />
          for us to carry together.</span>
        </h2>
      </div>
    </section>
  );
};

export default QuoteSection;
