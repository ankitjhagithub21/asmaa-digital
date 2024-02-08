import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12" id='about'>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <img
              src="https://qph.cf2.quoracdn.net/main-thumb-1509213493-200-mxwntugmoposfljccnhwsehoxbsewtjc.jpeg"
              alt="ASMAA DIGITAL INDIA PVT LTD"
              className="w-full h-auto md:w-2/3 mx-auto"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl font-semibold mb-4">About Us</h2>
            <p className="text-xl">
              Welcome to ASMAA DIGITAL INDIA PVT LTD (formerly known as Asmaa Manpower Pvt Ltd).

              Founded in 2019 as ASMA CONSULTANCY, we have come a long way from our beginnings in CUTTACK (ODISHA). When we first started, our passion was to provide the best services in the market in ODISHA. But now we operate all over India, aiming to provide top-notch services across the country.

              We hope you enjoy our services as much as we enjoy providing them for you. ASMAA DIGITAL INDIA PVT LTD is your number one source for all things. We are dedicated to delivering the very best results in the market through our manpower.
            </p>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default About;
