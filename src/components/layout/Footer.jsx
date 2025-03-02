import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-0 py-10">
      <section className="flex justify-between items-center p-6 max-w-screen-xl mx-auto">
        <div className="w-full flex flex-col xl:flex-row justify-between items-start space-y-6 lx:space-y-0 ">
          {/* Company logo and Description */}
          <div className="w-full">
            <h1 className="font-Poppins-Bold text-xl tracking-wider text-primary-500">
              GORENT
            </h1>
            <p className="w-full xl:w-80 font-Poppins text-secondary-400 py-6">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          {/* About */}
          <div className="w-full lg:w-1/3">
            <h3 className="font-Poppins-SemiBold text-secondary-600 pb-3">
              About
            </h3>
            <div className="font-Poppins text-sm text-secondary-500 space-y-4">
              <p className="">How it work?</p>
              <p className="">Featured</p>
              <p className="">Patnership</p>
              <p className="">Business Relation</p>
            </div>
          </div>
          {/* Community */}
          <div className="w-full lg:w-1/3">
            <h3 className="font-Poppins-SemiBold text-secondary-600 pb-3">
              Community
            </h3>
            <div className="font-Poppins text-sm text-secondary-500 space-y-4">
              <p className="">Events</p>
              <p className="">Blog</p>
              <p className="">Podcast</p>
              <p className="">Invite friend</p>
            </div>
          </div>
          {/* Socail */}
          <div className="w-full lg:w-1/3">
            <h3 className="font-Poppins-SemiBold text-secondary-600 pb-3">
              Social
            </h3>
            <div className="font-Poppins text-sm text-secondary-500 space-y-4">
              <p className="">Discord</p>
              <p className="">Instragram</p>
              <p className="">Twitter</p>
              <p className="">Facebook</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
