import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import am1 from "../../assets/imgs/am1.webp";
import am2 from "../../assets/imgs/am2.jpg";
import am3 from "../../assets/imgs/am3.webp";

function AmenitiesPage() {
  return (
    <div>
      <Navbar />
      <section className="p-[5%] ">
        <div className="">
          {/* home */}
          <div className="text-text-color text-center md:mb-10 mb-5">
            <h1 className="text-xl coustard-regular">Amenities</h1>
          </div>

          <div className="text-text-color  flex items-center justify-center md:gap-10 gap-5 lg:flex-row flex-col-reverse">
            <div className="lg:w-[50%] w-full bg-white p-3 shadow-lg border border-gray-200 rounded ">
              <img
                src={am1}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="lg:w-[50%] w-full">
              <h1 className="text-xl coustard-regular">Health and Wellness</h1>
              <p className="text-sm  open-sans pt-2 leading-6">
                Our calendar of activities is carefully planned so that every
                resident has the chance to participate in a range of programs
                that will enrich their lives physically, mentally, and socially.
                Whether participating in active or passive activities, taking
                part in our offerings is a great way for residents to be happier
                and healthier by leaving loneliness behind and participating in
                healthful and engaging activities. These include:
              </p>
              <ul className="list-disc list-inside text-sm pt-2">
                <li>Art Therapy</li>
                <li>Structured Activities</li>
                <li>Visiting Services from Medical Professionals</li>
              </ul>
            </div>
          </div>

          <hr className="md:my-14 my-5 border-t-2 border-dotted border-gray-300" />
          <div className="text-text-color  flex items-center justify-center md:gap-10 gap-5 lg:flex-row flex-col-reverse">
            <div className="lg:w-[50%] w-full bg-white p-3 shadow-lg border border-gray-200 rounded ">
              <img
                src={am2}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="lg:w-[50%] w-full">
              <h1 className="text-xl coustard-regular">Accommodations</h1>
              <p className="text-sm  open-sans pt-2 leading-6">
                We always provide quality service, but we really pride ourselves
                on our positive, clean atmosphere. This 6-bed facility is clean,
                safe, and provides a tight knit community for our residents to
                thrive in.
              </p>
              <ul className="list-disc list-inside text-sm pt-2">
                <li>Nutritious Meals</li>
                <li>Housekeeping and linen services</li>
                <li>Medication Management</li>
                <li>Personal Hygiene and grooming assistance</li>
                <li>Barber and beautician services at an additional cost</li>
              </ul>
            </div>
          </div>


          <hr className="md:my-14 my-5 border-t-2 border-dotted border-gray-300" />
          <div className="text-text-color  flex items-center justify-center md:gap-10 gap-5 lg:flex-row flex-col-reverse">
            <div className="lg:w-[50%] w-full bg-white p-3 shadow-lg border border-gray-200 rounded ">
              <img
                src={am3}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="lg:w-[50%] w-full">
              <h1 className="text-xl coustard-regular">Our Staff</h1>
              <p className="text-sm  open-sans pt-2 leading-6">
              It’s comforting to know that you’re never alone when you need assistance. The highly trained and dedicated staff at The Winchester Home are on site 24/7 in order to serve all our residents’ needs. We guarantee that after getting to know us, you’ll feel like you’ve already found an Assisted Living Home for yourself or your loved ones.

​

Our team of trained professionals meet the following standards:
              </p>
              <ul className="list-disc list-inside text-sm pt-2">
                <li>Criminal Background Checks</li>
                <li>Yearly Physical Examinations</li>
                <li>TB screening</li>
                <li>Reference Checks</li>
                <li>Certified in Cardiopulmonary Resuscitation (CPR)</li>
              </ul>
            </div>
          </div>
        </div>
       
      </section>
      <Footer />
    </div>
  );
}

export default AmenitiesPage;
