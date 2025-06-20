import Image from "next/image";
import ROADMAP from "@/public/roadmap.svg";

const Roadmap = () => {
  return (
    <section id="roadmap" className="w-screen min-h-[500px] mt-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl min-[360px]:text-4xl md:text-6xl text-primary font-bold text-center">
          Our Future Roadmap
        </h1>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-[70%]">
          <p className="text-lg md:text-2xl text-primary font-semibold">
            Phase 1
          </p>
          <p className="text-lg md:text-2xl text-primary font-semibold">
            Phase 2
          </p>
          <p className="text-lg md:text-2xl text-primary font-semibold">
            Phase 3
          </p>
        </div>
        <Image src={ROADMAP} alt="roadmap" width={1000} height={1000} />
        <div className="flex flex-col md:flex-row items-center justify-between w-[95%] gap-8 md:gap-0 mt-8 md:mt-4 lg:max-w-[70%]">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl text-secondary font-semibold max-w-48 text-center">
            Daily digest, AI replies, and core Gmail/Calendar integrations.
          </p>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl text-secondary font-semibold max-w-48 text-center">
            Google Meet summaries and smart task creation from your
            conversations.
          </p>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl text-secondary font-semibold max-w-48 text-center">
            Team dashboards, Slack integration, and an open API for custom
            workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
