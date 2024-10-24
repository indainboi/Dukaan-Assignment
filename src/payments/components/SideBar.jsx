import React from 'react'
import logo from '../images/logo.png'
import { FaChevronDown } from 'react-icons/fa'
import menus from '../utils/SidebarIcons'
import { CiWallet } from 'react-icons/ci'

export const SideBar = () => {
    return (
        <div className="bg-[#1e2640] flex flex-col justify-between text-white h-screen w-[17%] py-4 px-2.5 fixed">
            <div>
                <div className='flex items-center gap-3 px-2.5 mb-6'>
                    <div>
                        <img src={logo} alt="Nishyan" className='rounded w-10 h-10' />
                    </div>
                    <div className='flex gap-3 justify-between items-center w-full'>
                        <div>
                            <h4 className='text-lg font-medium'>Nishyan</h4>
                            <a className='underline text-[13px] text-gray-300' href="#">Visit Store</a>
                        </div>
                        <div>
                            <FaChevronDown size="20" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    {menus && menus.length > 0 ? menus.map((menuItem) => {
                        return (
                            <div className='flex hover:bg-[#494f64] rounded items-center gap-3 px-4 py-2 cursor-pointer ease-in duration-100' key={menuItem.label}>
                                <div>
                                    {menuItem.icon}
                                </div>
                                <div className='text-sm text-gray-300'>
                                    {menuItem.label}
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
            <div className='flex items-center rounded bg-[#353C53] gap-3 px-3 py-1.5 cursor-pointer'>
                <div className='bg-[#494f64] rounded p-1.5'>
                    <CiWallet size='30' />
                </div>
                <div>
                    <h5 className="text-[13px] text-gray-200">Available credits</h5>
                    <h4 className="text-base font-medium">224.10</h4>
                </div>
            </div>
        </div>
    )
}
