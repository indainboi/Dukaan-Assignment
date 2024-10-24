import React from 'react'

export const Cards = ({head, value}) => {
  return (
    <div className='w-full shadow rounded-lg bg-white p-5'>
        <h4 className='text-base text-[#4d4d4d] leading-6 mb-4'>{head}</h4>
        <h1 className='text-[32px] font-medium leading-[38px]'>{value}</h1>
    </div>
  )
}
