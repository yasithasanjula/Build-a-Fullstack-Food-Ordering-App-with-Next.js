"use client"
import { signOut,useSession } from 'next-auth/react';
import Link from 'next/link'


export default function Header() {
  const session = useSession();
  console.log(session);
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if(userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
   return(
    <header className='flex items-center justify-between'>
    <nav className='flex items-center gap-8 text-gray-500 text-semibold'>
      <Link className='text-2xl font-semibold text-primary' href="/">
        ST PIZZA
      </Link>
      <Link href={'/'}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
    </nav>
    <nav className='flex items-center gap-4 text-gray-500 text-semibold'>
      {status === 'authenticated' && (
        <>
        <Link href={'/profile'} className='whitespace-nowrap'>
          Hello, {userName}
        </Link>
        <button onClick={() => signOut()}
        className='px-8 py-2 text-white rounded-full bg-primary'>
        Logout
       </button>
        </>
        
      )}
      {status === 'unauthenticated' && (
        <>
          <Link href={'/login'}>Login</Link>
          <Link href={'/register'} className='px-8 py-2 text-white rounded-full bg-primary'>
            Register
          </Link>
        </>
      )}
      
    </nav>
  </header>
   ); 
}