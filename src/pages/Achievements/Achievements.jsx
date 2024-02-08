import React from 'react'
import data from '../../data/achievements'
const Achievements = () => {
    return (
        <section id='achievements'>
           <div className="container mx-auto py-24">
           <h2 className='text-4xl font-bold mb-5 ml-5'>Achievements</h2>
            <div className="flex flex-wrap">
                
                <div className="lg:w-1/2 w-full flex flex-wrap">
                    {
                        data.map((box) => {
                            return <div className='w-1/2 p-3' key={box.id}>
                              <div className='shadow-lg bg-gray-200 h-32 rounded-md text-center p-2 text-2xl font-bold flex items-center justify-center'>
                              {box.content}
                              </div>
                            </div>
                        })
                    }

                </div>
                <div className="lg:w-1/2 w-full uppercase text-2xl flex items-center gap-2 justify-center my-8 px-3 font-bold">
                    Over 6,00,000 +
                    Onboarding Completed &
                    Still Counting
                    AREA OF OPERATION:
                    10000+ STRONG TEAM PAN INDIA
                </div>
            </div>
           </div>
        </section>
    )
}

export default Achievements