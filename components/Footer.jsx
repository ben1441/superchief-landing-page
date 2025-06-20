import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="bg-primary text-white w-screen h-[200px]">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-2xl md:text-3xl font-bold">SuperChief.Pro</p>
        <p className="mt-6 max-w-[90%] md:max-w-[70%] text-center">
          Your privacy is paramount. We use secure, OAuth-based logins and only
          process data with your explicit consent.
        </p>
        <div className="mt-4 w-[80%] md:w-[70%] h-0.5 bg-white"></div>
        <p className="mt-6">
          &copy; {new Date().getFullYear()} SuperChief.Pro. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
