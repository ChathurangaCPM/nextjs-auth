import React from 'react';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className='w-full pt-2'>
      <div className='p-2 left-2/4 translate-y-2/4 border-2 rounded-3xl flex flex-row justify-between max-w-screen-xl mx-auto'>
        <div className='flex gap-2'>
          <Image
            source={{
              uri:"https://wallpaperaccess.com/full/317501.jpg"
            }}
            alt="Alternate Text"
            size="xs"
          />
          Search
        </div>
        <div>Right</div>
      </div>
    </div>
  )
}
