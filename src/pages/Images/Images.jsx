import React from 'react'
const images = [
    "ss-1.jpg",
    "ss-2.jpg",
    "ss-3.jpg",
    "ss-4.jpg",
    "ss-5.jpg",
    "ss-6.jpg",
    "ss-7.jpg",
   
]
const Images = () => {
  return (
    <section >
        <div className="container mx-auto flex overflow-x-scroll gap-5 my-24 justify-start" id='imageContainer'>
            {
                images.map((image,index)=>{
                    return <div className='rounded-md' key={index}>
                    <img src={`/${image}`} alt="service-1" className='lg:min-w-[15vw] min-w-[50vw]  object-contain' />
                </div>
                })
            }
        </div>
    </section>
  )
}

export default Images