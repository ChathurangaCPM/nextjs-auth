"use client"
/* eslint-disable @next/next/no-async-client-component */
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  const session = useSession();
  
  return (
    <h2>Page</h2>
  )
}
