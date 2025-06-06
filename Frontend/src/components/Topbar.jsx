import { ChevronRight, Inbox } from 'lucide-react'
import React from 'react'
import Profile from '../assets/profile.png'

const Topbar = () => {
  return (
    <div className='flex items-center py-2.5 px-4 justify-between border-b border-gray-200'>
      <div className='flex items-center gap-1'>
        <h1 className='text-[#7f7f89] text-[14px]'>General</h1>
        <ChevronRight className='text-[#7f7f89]' size={14} />
        <h2 className='text-[14px] font-medium'>Dashboard</h2>
      </div>

      <div className='flex items-center gap-2'>
        <button className='flex items-center py-1.5 border shadow-xs border-gray-300 gap-1.5 rounded-md px-3 cursor-pointer max-md:hidden'>
          <Inbox size={18} />
          <span className='text-[14px] font-medium'>Inbox</span>
        </button>

        <img src={Profile} alt="profile" className='w-7.5 h-7.5' />

      </div>
    </div>
  )
}

export default Topbar
