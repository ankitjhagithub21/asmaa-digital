import React from 'react'

const Contact = () => {
  return (
    <section className="bg-gray-200 py-24" id='contact'>
    <div className="container mx-auto px-4">
      <div className="lg:text-center text-left">
        <h2 className='mb-10  text-4xl font-bold'>Our Office</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">REGISTERED OFFICE</h3>
            <p>
              PLOT 340/3666, NEW COLONY, KANIKA
              <br /> CHAK FRONT LANE OF SUNNY MOTORS
              <br /> CUTTACK-753008 ODISHA
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">CORPORATE OFFICE</h3>
            <p>
              B 93B BASEMENT NOIDA SECTOR -2 OPPOSITE SBI BANK
              <br /> UP 201301
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact