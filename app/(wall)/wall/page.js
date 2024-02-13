import React from 'react'
import LeftSideBar from '@/app/components/custom/leftSideBar'

export default function MainWall() {
  return (
    <div className="w-full">
      <LeftSideBar />
      <div className="pl-[320px]">
        <div className="flex gap-[30px]">
          <div className="flex-grow pt-5">
            Render wall related content
          </div>
          <div className="flex-none w-[300px] bg-slate-50 p-32">Sidebar</div>
        </div>
      </div>
    </div>
  )
}
