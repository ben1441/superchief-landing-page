import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import IPHONE13 from "@/public/iPhone13.svg";
import GMAIL from "@/public/gmail.svg";
import CALENDAR from "@/public/calendar.svg";
import DOCS from "@/public/docs.svg";
import MEET from "@/public/meet.svg";
import OPENAI from "@/public/openai.svg";
import WHATSAPP from "@/public/whatsapp.svg";

const Hero = () => {
  return (
    <section id="hero" className="w-screen min-h-[800px]">
      <div className="mt-36 flex flex-col items-center justify-center w-screen gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl min-[360px]:text-4xl md:text-6xl text-primary font-bold">
            Your AI Chief of Staff.
          </h1>
          <h1 className="text-3xl min-[360px]:text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#9398FF] to-[#FF93E2] bg-clip-text text-transparent">
            On WhatsApp.
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[700px] text-center">
            SuperChief is your personal AI that handles emails, meetings,
            follow-ups, and ops — so you can focus on building your startup.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-2 md:gap-6 z-10">
          <Button className="bg-[#81cd7c] px-4 py-1 text-black rounded-full -ml-16 md:ml-0">
            Coming Soon
          </Button>
          <Button className="bg-black text-[#81cd7c] px-4 py-1 rounded-full ml-20 md:ml-0">
            Available on WhatsApp
          </Button>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-12 items-center md:relative z-10">
            <Image
              src={GMAIL}
              width={80}
              height={80}
              alt="Gmail"
              className="md:relative md:right-10 xl:right-80 xl:bottom-0 w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
            />
            <Image
              src={CALENDAR}
              width={80}
              height={80}
              alt="Calendar"
              className="md:relative md:right-10 xl:right-40 xl:bottom-50 w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
            />
            <Image
              src={MEET}
              width={100}
              height={100}
              alt="Meet"
              className="md:relative md:right-10 xl:right-10 xl:bottom-20 w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          </div>
          <Image
            src={IPHONE13}
            width={488}
            height={993}
            alt="iPhone 13"
            className="w-[267px] h-[543px] md:w-[488px] md:h-[993px] bg-[#DEFFEF] backdrop-blur-2xl rounded-[42px] md:rounded-[75px] shadow-[0px_4px_100px_32px_#DEFFEF]"
          />
          <div className="flex flex-col gap-12 items-center lg:relative z-10 max-lg:-mt-24">
            <Image
              src={OPENAI}
              width={80}
              height={80}
              alt="OpenAI"
              className="md:relative md:left-10 xl:left-60 xl:top-30 w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
            />
            <Image
              src={DOCS}
              width={80}
              height={80}
              alt="Docs"
              className="md:relative md:left-10 xl:left-10 xl:bottom-30 w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
            />
            <Image
              src={WHATSAPP}
              width={100}
              height={100}
              alt="WhatsApp"
              className="md:relative md:left-10 xl:left-80 xl:bottom-80 w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
