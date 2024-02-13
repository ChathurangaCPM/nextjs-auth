'use client';
import React from 'react'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function LeftSideBar({type}) {
  const session = useSession();
  const handlerLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <div className='fixed h-full p-5 border-r-[1px] min-w-[300px]'>
      <div className='flex gap-2 items-center mb-20'>
        <div className="w-[40px] rounded-[40px] h-[40px] bg-slate-500"></div>
        <div className="font-bold">Travel App</div>
      </div>

      <div className='flex flex-col gap-2'>
        <Link href="/wall">Go Back</Link>
        <Link href="/experiences">experiences -</Link>
        {type === "experiences" && <h3>Render experiences related menus</h3>}
        <button className='flex gap-2'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bomb"><circle cx="11" cy="13" r="9" /><path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" /><path d="m22 2-1.5 1.5" /></svg>
          </div>
          Discover</button>
        <div className="border-spacing-1 mt-2">
          {session.status === 'authenticated' ? <button onClick={handlerLogout}>Log out</button> : <Link href="/login">Login</Link>}
        </div>
      </div>
    </div>
  )
}
