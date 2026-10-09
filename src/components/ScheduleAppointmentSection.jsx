import Image from "next/image";

const ScheduleAppointmentSection = () => {
  return (
    <section className="w-full bg-brand-bg py-24 md:py-0 flex flex-col md:flex-row relative items-center justify-center md:min-h-screen">
      {/* Left decorative image */}
      <div className="hidden md:block absolute left-0 top-[10%] bottom-[10%] w-[12%] z-0">
        <Image
          src="/images/sand_shells.png"
          alt="Decorative sand"
          fill
          className="object-cover object-right opacity-80"
        />
      </div>

      <div className="w-full max-w-[1700px] mx-auto flex flex-col md:flex-row px-8 md:px-16 lg:px-24 gap-16 relative z-10 py-24 md:py-0 h-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-12 md:py-32">
          <h4 className="text-[0.65rem] font-semibold tracking-[0.25em] text-brand-dark uppercase mb-16">
            Schedule an appointment
          </h4>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-brand-dark font-normal leading-tight mb-8 max-w-lg">
            Find a therapist who is the right fit for <span className="font-script text-5xl md:text-[4.5rem] text-brand-teal ml-1">you.</span>
          </h2>

          <div className="text-[0.85rem] font-light leading-relaxed text-brand-gray space-y-6 max-w-lg mb-12">
            <p>
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>
            <p>
              Click the button below to schedule an appointment.
            </p>
          </div>

          <div>
            <a href="#book" className="inline-block px-10 py-3 border border-brand-dark rounded-[50px] text-[0.65rem] tracking-[0.2em] text-brand-dark hover:bg-brand-dark hover:text-white transition-colors uppercase">
              Book now
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative">
          <Image
            src="/images/sand_shells.png"
            alt="Pointing at shells in sand"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleAppointmentSection;
