import Image from "next/image";

const HowWeWorkSection = () => {
  return (
    <section className="w-full bg-[#EBE7DF] flex justify-center">
      <div className="max-w-[1900px] w-full flex flex-col md:flex-row relative md:min-h-screen items-stretch mx-auto">
        <div className="w-full md:w-[70%] px-8 md:px-16 lg:pl-24 lg:pr-32 pb-16 md:pb-24 pt-16 md:pt-24 flex flex-col justify-between">
          <div>
            <h4 className="text-[0.65rem] font-semibold tracking-[0.25em] text-brand-dark uppercase">
              How we work
            </h4>
          </div>

          <div className="my-auto py-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-brand-dark font-normal leading-[1.1] mb-16 max-w-3xl">
              We're here to make a difference.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-[1.05rem] leading-[1.8] text-brand-dark font-light">
              <div className="pr-0 md:pr-4">
                <p className="font-medium uppercase tracking-[0.1em] mb-8 text-[0.8rem] leading-[1.6]">
                  The clients we work with are balancing so many things at once,
                  it's often hard for them to put themselves first.
                </p>
                <p>
                  Here, your needs are always top priority. Our team takes the
                  time to deeply listen to our clients in order to truly
                  understand their story and their struggles. We recognize that
                  no two people are the same and that personalized therapy means
                  an intentional, tailored approach. (You won't find anything
                  "one-size-fits-all" here.) If you're ready to do the work,
                  we're ready to help.
                </p>
              </div>
              <div>
                <p>
                  Sometimes we may gently challenge you to look at things
                  differently and other times we may explore your emotions, all
                  while encouraging you to practice what you've learned in your
                  daily life. We take what we do seriously because we know how
                  important it is for you to heal from what's hurting you,
                  discover a fulfilling life, and build meaningful
                  relationships. Our goal is to walk alongside you in this
                  journey, offering support and guidance as you uncover your
                  strengths and embrace what the future can hold for you.
                </p>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#about"
              className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors"
            >
              Learn more about us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[30%] h-[50vh] md:h-[80vh] my-auto relative">
          <Image
            src="/images/work_difference.png"
            alt="Mother and daughter playing on the beach"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
