import React from 'react'
import LeftSideBar from '@/app/components/custom/leftSideBar'
import ExpFeaturedCard from '@/app/components/custom/experiences/featuredCard'

export default function ExperiencesMainPage() {
  return (
      <div className="w-full">
          <LeftSideBar type="experiences"/>
          <div className="pl-[320px]">
              <div className="flex gap-[30px]">
                  <div className="flex-grow pt-5">
                      <ExpFeaturedCard />
                  </div>
                  <div className="flex-none w-[300px] bg-slate-50 p-3 h-lvh">
                    render all the filters
                  </div>
              </div>
          </div>
      </div>
  )
}
