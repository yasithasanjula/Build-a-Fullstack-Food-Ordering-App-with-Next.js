'use client';
import React from 'react'
import {useSession} from 'next-auth/react';


export default function page() {
  const session = useSession();
  console.log(session);
  return (
    <section className="mt-8">
        <h1 className="mb-4 text-4xl text-center text-primary">
            Profile
        </h1>
    </section>
  )
}
