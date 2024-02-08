import React from 'react'
import data from '../../data/services'
import Service from '../../components/Service/Service'
import "./Services.css"
const Services = () => {
  return (
    <section id='services'>
    <div className="container px-5 py-24 mx-auto">
      
      <div className="flex flex-wrap -m-4">
       
        {
          data.map((service)=>{
            return <Service key={service.id} data={service}/>
          })
        }
      </div>
      <div id='serviceImg' className='mt-10 rounded-md'>
      
      </div>
    </div>
  </section>
  
  )
}

export default Services