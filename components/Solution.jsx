import React from "react";
import Image from "next/image";
import CONVERSATION from "@/public/conversation.png";

const Solution = () => {
  return (
    <section id="solution" className="w-screen min-h-[500px] mt-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl min-[360px]:text-4xl md:text-6xl text-primary font-bold text-center">
          The Solution: Smart, Seamless, App-less
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
          SuperChief.Pro integrates directly into your existing workflow. This
          interactive demonstration shows how the AI Chief of Staff communicates
          with you on WhatsApp to summarize your day, draft replies, and keep
          you on track.
        </p>
        <Image
          src={CONVERSATION}
          alt="conversation"
          width={1030}
          height={500}
          className="hidden md:block w-[1030px] md:h-[500px]"
        />
        <Image
          src={CONVERSATION}
          alt="conversation"
          width={1030}
          height={500}
          className="block md:hidden w-[500px] h-[300px]"
        />
      </div>
    </section>
  );
};

export default Solution;
