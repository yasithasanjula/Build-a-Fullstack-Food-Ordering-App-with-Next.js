'use client';
import React, { useState } from 'react'
import {useSession} from 'next-auth/react';
import {redirect} from 'next/navigation';
import Image from 'next/image';


export default function page() {
  const session = useSession();
  const [userName, setUserName] = useState(session?.data?.user?.name || ' ');
  const {status} = session;

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JOSN.stringify({name:userName}),
    });
    
  }

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
          <div className='flex items-center gap-4'>
            <div>
              <div className='relative p-2 rounded-lg'>
                
                  <Image className='w-full h-full mb-1 rounded-lg' src={userImage} alt={'avater'} width={250} height={250} />
                  <button type="button">Edit</button>
                
                
              </div>
              
            </div>
            <form className='grow' onSubmit={handleProfileInfoUpdate}>
              <input type="text" placeholder='first and last name'
                value={userName} onChange={ev => setUserName(ev.target.value)}/>
              <input type="email" disabled={true}value={session.data.user.email} />
              <button type="submit">Save</button>
            </form>
            
          </div>
        </form>
    </section>
  )
}
