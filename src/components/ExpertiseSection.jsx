import { leftExpertise, rightExpertise } from "../data/expertiseData";

const ExpertiseSection = () => {
  const ListItem = ({ text }) => (
    <li className="py-6 border-b border-brand-border/60 text-xs font-semibold tracking-[0.2em] text-brand-dark uppercase w-full">
      {text}
    </li>
  );

  return (
    <section className="w-full bg-brand-white py-24 px-8 md:px-16 lg:px-24 md:min-h-screen flex items-center">
      <div className="w-full max-w-[1900px] mx-auto flex flex-col md:flex-row gap-16 md:gap-8 py-12 md:py-0">
        {/* Heading */}
        <div className="w-full md:w-1/3 pt-4">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-normal flex flex-col items-start leading-tight">
            <span>Our areas of</span>
            <span className="font-script text-6xl md:text-[5.5rem] text-brand-teal mt-[-10px]">
              expertise
            </span>
          </h2>
        </div>

        {/* Lists */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          <ul className="flex flex-col">
            {leftExpertise.map((item, index) => (
              <ListItem key={`left-${index}`} text={item} />
            ))}
          </ul>
          <ul className="flex flex-col">
            {rightExpertise.map((item, index) => (
              <ListItem key={`right-${index}`} text={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
