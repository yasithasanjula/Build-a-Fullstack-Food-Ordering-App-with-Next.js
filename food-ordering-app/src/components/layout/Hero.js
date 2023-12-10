import React from 'react'
import Image from 'next/image';
import Right from '../icons/Right';

export default function Hero() {
  return (
    <section className='grid grid-cols-2'>
        <div>
            <h1 className='text-4xl font-semibold'>
                Everything is better with a Pizza
            </h1>
            <p className='my-4 text-gray-500'>
             Pizza is the missing piece that makes every day
             complete, a simple yet delicious joy in life 
            </p>
            <div className='flex gap-4 '>
                <button className="flex items-center justify-center gap-2 px-4 py-2 text-white uppercase rounded-full bg-primary">
                    Order now 
                    <Right />
                </button>
                <button>
                    Learn more
                </button>
            </div>
        </div>
        
        <div className='relative'>
        <Image src={'/pizza.png'} layout={'fill'} 
        objectFit={'contain'}alt={'pizza'} />
        </div>
        
    </section>
  )
}
