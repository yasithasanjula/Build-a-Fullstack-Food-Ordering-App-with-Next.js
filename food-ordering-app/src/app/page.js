import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <Link className='text-2xl font-semibold text-red-500' href="">ST PIZZA</Link>
        <nav>
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={''}>Login</Link>
        </nav>
      </header>
    </>
  )
}
