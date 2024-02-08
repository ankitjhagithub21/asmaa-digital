import React from 'react'

const Hero = () => {
  return (
    <section id='home'>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="sm:text-4xl text-2xl my-4 font-bold">
          
        WELCOME TO ASMAA DIGITAL INDIA PVT LTD
        </h1>
        <p className="mb-8 leading-relaxed text-lg">
        formerly known as Asmaa Manpower Pvt Ltd <br />
       <b> Your Brand, Your Business, Our Staff</b>
        </p>
        <div className="flex justify-center">
          <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href='#contact'>
            Contact Us
          </a>
         
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://static.wixstatic.com/media/0b1396_f049778d503e48c6b88f30503d272519~mv2.webp"
        />
      </div>
    </div>
  </section>
  
  
  )
}

export default Hero