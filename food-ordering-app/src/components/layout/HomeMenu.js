import React from 'react'
import Image from 'next/image'

export default function HomeMenu() {
  return (
    <>
    <section className=''>
      <div className='absolute left-0 right-0 justify-start w-full h-full'>
        <div className='absolute left-0 -top-[70px] -z-10'>
          <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'}/>
        </div>

        <div className='absolute right-0 -top-36 -z-10'>
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'}/>
        </div>
        
      </div>
        <div className='text-center'>
          <h3 className='font-semibold leading-4 text-gray-500 uppercase'>
            Check out
          </h3>
          <h2 className='text-4xl italic font-bold text-primary'>Menu</h2>  
        </div>
        
    </section>
    </>
  )
}
