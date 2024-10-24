import React from 'react'
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <div className='flex w-full gap-2 items-center rounded-md px-4 py-[9px] bg-[#f2f2f2]'>
        <CiSearch size='22' />
        <input className='w-full bg-transparent text-[15px] leading-[22px] focus:outline-none' type="text" placeholder="Search features, tutorials, etc." />
    </div>
  )
}
