import React from 'react'

const Service = ({data}) => {
  return (
    <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
    <div className="flex flex-col gap-3">
     <h2 className='text-3xl font-bold'>{data.title}</h2>
     <p className='text-xl'>{data.desc}</p>
    </div>
  </div>
  )
}

export default Service