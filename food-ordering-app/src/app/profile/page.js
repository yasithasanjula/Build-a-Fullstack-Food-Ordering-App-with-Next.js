'use client';
import React from 'react'
import {useSession} from 'next-auth/react';
import {redirect} from 'next/navigation';
import Image from 'next/image';


export default function page() {
  const session = useSession();
  const {status} = session;

  if(status == 'loading'){
    return 'Loading...'
  }
  
  if(status == 'unauthenticated'){
    redirect('/login');
  }

  const userImage = session.data.user.image;
  return (
    <section className="mt-8">
        <h1 className="mb-4 text-4xl text-center text-primary">
            Profile
        </h1>
        <form className="max-w-md mx-auto">
          <div className='flex items-center gap-2'>
            <div>
              <Image src={userImage} width={80} height={80} alt={'avater'} />
            </div>
            <div className='grow'>
              <input type="text" placeholder='first and last name'/>
            </div>
            
          </div>
        </form>
    </section>
  )
}
