import React from "react";
import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="w-screen min-h-[200px] mt-24">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl min-[360px]:text-4xl md:text-6xl text-primary font-bold text-center">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center z-10">
          Choose the plan that fits your stage. Our pricing is designed to grow
          with you, from a free beta to unlock core features to powerful team
          plans. This section provides an interactive look at our monetization
          strategy.
        </p>
        <div className="flex flex-col min-[860px]:flex-row items-center justify-center gap-6 bg-[#E7FEF2] shadow-[0px_4px_100px_32px_#E7FEF2]">
          <div className="bg-white flex flex-col items-center justify-center border-2 border-[#9CCEB5] rounded-4xl min-w-[200px] lg:min-w-[400px] gap-4 p-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold text-center underline">
              Starter
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold text-center">
                Free
              </h2>
              <Button className="bg-primary text-white px-4 font-bold rounded-2xl">
                Beta
              </Button>
            </div>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Daily Digests
            </p>
            <div className="w-[230px] h-0.5 bg-secondary"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Gmail Integration
            </p>
            <div className="w-[230px] h-0.5 bg-secondary"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Basic Reply Drafting
            </p>
            <Button className="mt-8 text-primary bg-white border-2 border-[#225112] px-4 font-bold">
              Get Started for Free
            </Button>
          </div>
          <div className="bg-white flex flex-col items-center justify-center border-2 border-[#9CCEB5] rounded-4xl min-w-[200px] lg:min-w-[400px] gap-4 p-4">
            <h2 className="mt-4 text-2xl md:text-4xl text-primary font-bold text-center underline">
              Pro
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <h2 className="text-2xl md:text-4xl text-primary font-bold text-center">
                ₹499/mo
              </h2>
              <Button className="bg-primary text-white px-4 font-bold rounded-2xl">
                Beta
              </Button>
            </div>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Everything in Starter
            </p>
            <div className="w-[230px] h-0.5 bg-secondary"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Follow-ups
            </p>
            <div className="w-[230px] h-0.5 bg-secondary"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Unlimited Drafts
            </p>
            <div className="w-[230px] h-0.5 bg-secondary"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Meeting Summaries
            </p>
            <Button className="mt-8 mb-4 text-white bg-primary px-4 font-bold">
              Choose Pro
            </Button>
          </div>
          <div className="bg-white flex flex-col items-center justify-center border-2 border-[#9CCEB5] rounded-4xl min-w-[200px] lg:min-w-[400px] gap-4 p-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold text-center underline">
              Teams
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold text-center">
                ₹1499/mo
              </h2>
              <Button className="bg-primary text-white px-4 font-bold rounded-2xl">
                Beta
              </Button>
            </div>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Everything in Pro
            </p>
            <div className="w-[230px] h-0.5 bg-secondary"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Slack Integration
            </p>
            <div className="w-[230px] h-0.5 bg-secondary"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Team Dashboards
            </p>
            <div className="w-[230px] h-0.5 bg-secondary"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
              Onboarding Support
            </p>
            <Button className="mt-8 text-primary bg-white border-2 border-[#225112] px-4 font-bold">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
