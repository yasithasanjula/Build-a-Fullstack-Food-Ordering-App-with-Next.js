import React from 'react'

export default function registerpage() {
  return (
    <section className='mt-8'>
        <h1 className='text-4xl text-center text-primary'>
            Register
        </h1>
        <form>
            <input type='email' placeholder='email' />
            <input type="password" placeholder='password' name="" id="" />
            <button type="submit">Register</button>
        </form>
    </section>
  )
}
