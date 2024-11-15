import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import hero from "../../assets/imgs/hero.webp";
import hero1 from "../../assets/imgs/hero1.webp";
import hero2 from "../../assets/imgs/hero2.webp";

function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="p-[5%] ">
        <div className="relative w-full ">
          <img
            src={hero}
            alt="Location"
            className="w-full h-72 object-cover rounded "
          />

          <div className="absolute top-0 md:right-10 right-2 w-full h-full flex items-center justify-end  ">
            <div className="text-text-color font-bold text-center md:p-10 p-5 bg-gray-50 rounded-lg bg-opacity-100">
              <p className="capitalize">manicured, suburban</p>
              <p className="capitalize">neighborhood</p>
              <p>Tel: (248) 970-2922</p>
              <hr className="my-5 border-t-2 border-dashed border-gray-300" />
              <p className="md:text-xl text-base coustard-regular">"A Place Like Home"</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 items-start py-10 md:flex-row flex-col">
          <div className="md:w-[70%] w-full">
            {/* home */}
            <div className="text-text-color">
              <h1 className="text-xl coustard-regular">Welcome Home</h1>
              <p className="text-sm  open-sans pt-2 leading-6">
                The Loving Hearts Senior Living Home is a beautifully furnished,
                6 bed facility located in a manicured, suburban neighborhood.
                Our top priority at The Loving Hearts Senior Living Home is to
                provide quality living, wellness and safety to our residents.
                Under the directorship of Chloé Williams, The Loving Hearts
                Senior Living Home aims to provide exceptional long and short
                term supervised residential services to aged persons with mental
                and physical health challenges.
              </p>

              <hr className="md:my-14 my-5 border-t-2 border-dotted border-gray-300" />
            </div>

            <div className="text-text-color  flex items-center justify-center md:gap-10 gap-5 lg:flex-row flex-col-reverse">
              <div className="lg:w-[50%] w-full bg-white p-3 shadow-lg border border-gray-200 rounded ">
                <img
                  src={hero1}
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="lg:w-[50%] w-full">
                <h1 className="text-xl coustard-regular">Our Mission</h1>
                <p className="text-sm  open-sans pt-2 leading-6">
                  The Loving Hearts Senior Living Home is committed to helping
                  our residents maintain their dignity, independence and overall
                  quality of life. We offer services that are tailored to suit
                  each resident's personal needs, preferences and interests. We
                  intend to provide a familial environment that guarantees
                  caregivers that their family members are receiving the highest
                  caliber of care.
                </p>
              </div>
            </div>

            <hr className="md:my-14 my-5 border-t-2 border-dotted border-gray-300" />
            <div className="text-text-color  flex items-center justify-center md:gap-10 gap-5 lg:flex-row flex-col-reverse">
              <div className="lg:w-[50%] w-full bg-white p-3 shadow-lg border border-gray-200 rounded ">
                <img
                  src={hero2}
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="lg:w-[50%] w-full">
                <h1 className="text-xl coustard-regular">Our Team </h1>
                <p className="text-sm  open-sans pt-2 leading-6">
                  It’s comforting to know that you’re never alone when you need
                  assistance. The dedicated staff at Loving Hearts Senior Living
                  Home are on call 24/7 in order to serve all our residents’
                  needs. We guarantee that after getting to know us, you’ll feel
                  like you’ve already found an Assisted Living Facility for
                  yourself or your loved ones.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] w-full text-text-color bg-gray-100 p-5 rounded">
            <h1 className="text-xl coustard-regular">Amenities</h1>
            <p className="text-sm  open-sans pt-2 leading-6">
              Amenities are specially designed for our residents to enjoy and
              benefit from.
            </p>
            <ul className="list-disc list-inside text-sm">
                <li>Open living and recreational spaces</li>
                <li>Cable Television</li>
                <li>Phone</li>
                <li>Safe Residential Neighborhood</li>
            </ul>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
