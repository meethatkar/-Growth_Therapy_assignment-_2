import Image from "next/image";

const HowWeWorkSection = () => {
  return (
    <section className="w-full bg-[#EBE7DF] flex justify-center">
      <div className="max-w-[1700px] w-full pt-24 md:py-0 flex flex-col md:flex-row relative md:min-h-screen items-stretch mx-auto">
        <div className="w-full md:w-[65%] px-8 md:px-16 lg:px-24 pb-32 md:pb-0 flex flex-col justify-center py-12">
        <h4 className="text-[0.65rem] font-semibold tracking-[0.25em] text-brand-dark uppercase mb-16">
          How we work
        </h4>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-brand-dark font-normal leading-tight mb-20 max-w-2xl">
          We're here to make a difference.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[0.85rem] leading-relaxed text-brand-dark">
          <div>
            <p className="font-medium uppercase tracking-wider mb-6 text-xs">
              The clients we work with are balancing so many things at once, it's often hard for them to put themselves first.
            </p>
            <p className="font-light">
              Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won't find anything "one-size-fits-all" here.) If you're ready to do the work, we're ready to help.
            </p>
          </div>
          <div>
            <p className="font-light">
              Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you've learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what's hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <a href="#about" className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors">
            Learn more about us
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[35%] h-[50vh] md:h-auto relative flex-grow">
        <Image
          src="/images/work_difference.png"
          alt="Mother and daughter playing on the beach"
          fill
          className="object-cover"
        />
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
