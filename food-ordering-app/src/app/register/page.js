"use client";
import Image from 'next/image'
import { useState } from 'react'

export default function registerpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleFormSubmit(ev){
      ev.preventDefault();
      fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'},
    });
    }
    
    
    
  return (
    <section className='mt-8'>
        <h1 className='mb-4 text-4xl text-center text-primary'>
            Register
        </h1>
        <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
            <input type='email' placeholder='email' value={email}
             onChange={ev => setEmail(ev.target.value)} />
            <input type="password" placeholder='password' value={password}
             onChange={ev => setPassword(ev.target.value)} />
            <button type="submit">Register</button>
            <div className='my-4 text-center text-gray-500'> 
                or login with provider
            </div>
            <button className='flex justify-center gap-4'>
                <Image src={'/google.png'} altr={''} width={24} height={24} />
                Login with google
            </button>
        </form>
       
    </section>
  )
}
