"use client"
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

import LeftSideBar from '@/app/components/custom/leftSideBar';
import CreatePostWrapper from '@/app/components/custom/wall/createPostWrapper';
import SinglePost from '@/app/components/custom/post/singlePost';

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  if (session.status !== "authenticated"){
    redirect('/login');
  }

  return (
    <div className='w-full'>
      <LeftSideBar />
      <div className='pl-[320px]'>
        <div className='flex gap-[30px]'>
          <div className='flex-grow pt-5'>
            <CreatePostWrapper/>
            
            <SinglePost />
            
          </div>

          <div className='flex-none w-[300px] bg-slate-50 p-32'>Sidebar</div>
        </div>
      </div>
    </div>
  )
}
