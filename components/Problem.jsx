import React from "react";

const Problem = () => {
  return (
    <section id="problem" className="w-screen min-h-[200px] mt-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl min-[360px]:text-4xl md:text-6xl text-primary font-bold text-center">
          The Modern Founder's Dilemma
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-secondary font-semibold max-w-[90%] md:max-w-[80%] text-center">
          Founders are overwhelmed. Juggling countless tasks across multiple
          apps leads to missed opportunities and constant context-switching.
          This section highlights the core challenges SuperChief.Pro is built to
          solve.
        </p>
      </div>
    </section>
  );
};

export default Problem;
