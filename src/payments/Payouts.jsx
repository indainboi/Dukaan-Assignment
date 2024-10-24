import { Cards } from "./components/Cards";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { LuArrowUpDown } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SideBar } from "./components/SideBar";


const transactions = [
    {
        orderId: "#281209",
        orderDate: "7 July, 2023",
        orderAmount: "₹1,278.23",
        transactionFees: "₹22",
    },
];

export const transactionData = Array.from(
    { length: 330 },
    () => transactions[0]
);

export default function Payouts() {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 19;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = transactionData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(transactionData.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % transactionData.length;
        setItemOffset(newOffset);
    };

    return <div className='flex w-full'>
        <div className='w-[17%] relative h-full'>
            <SideBar />
        </div>
        <div className='w-[83%] bg-gray-50'>
            <div className="sticky top-0">
                <Header />
            </div>
            <div className="m-8">
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xl leading-7 font-medium">Overview</h3>
                        </div>
                        <div className="rounded text-base text-[#4d4d4d] bg-white border border-[#d9d9d9] p-1">
                            <select className="focus:outline-none" name="filtermonth">
                                <option value="lastMonth">Last Month</option>
                                <option value="thisMonth">This Month</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <Cards head={"Online orders"} value={"231"} />
                        <Cards head={"Amount received"} value={"₹23,92,312.19"} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-[#1a181e] mb-5">Transactions | This Month</h3>
                    <div className="bg-white px-3 pt-3 pb-6">
                        <div className="flex justify-between items-center mb-3">
                            <div>
                                <div className='flex w-[249px] h-[40px] gap-2 items-center rounded-md px-4 py-2 bg-[#f2f2f2]'>
                                    <CiSearch size='18' />
                                    <input className='w-full bg-transparent text-sm leading-[22px] focus:outline-none' type="text" placeholder="Search by order ID..." />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center px-3 py-1.5 gap-1.5 text-base text-[#4d4d4d] rounded border border-[#d9d9d9]">
                                    Sort
                                    <LuArrowUpDown size="16" />
                                </button>
                                <button className="flex items-center px-3 py-1.5 rounded border border-[#d9d9d9]">
                                    <FiDownload />
                                </button>
                            </div>
                        </div>
                        <table className="w-full mb-6">
                            <thead>
                                <tr className="flex flex-grow text-sm text-[#4d4d4d] bg-[#f2f2f2] rounded px-3 py-2.5">
                                    <th className="w-1/4 flex font-normal ">Order ID</th>
                                    <th className="w-1/4 flex font-normal flex items-center gap-1">
                                        Order Date
                                        <TiArrowSortedDown size="14" />
                                    </th>
                                    <th className="w-1/4 flex justify-end font-normal">Order Amount</th>
                                    <th className="w-1/4 flex justify-end font-normal flex items-center gap-1">
                                        Transaction Fees
                                        <HiOutlineInformationCircle size="14" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((data, index) => (
                                    <tr className="flex border-b px-3 py-3.5 text-sm" key={index}>
                                        <td className="w-1/4 text-[#146EB4] font-medium">
                                            {data.orderId}
                                        </td>
                                        <td className="w-1/4 text-[#1a181e]">{data.orderDate}</td>
                                        <td className="w-1/4 text-[#1a181e] flex justify-end">{data.orderAmount}</td>
                                        <td className="w-1/4 text-[#1a181e] flex justify-end">
                                            {data.transactionFees}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={
                                <span className="border rounded-md flex items-center py-1 pl-3 pr-1 cursor-pointer mx-5 text-sm">
                                    Next
                                    <MdOutlineKeyboardArrowRight size="20" className=" mb-[-2px]" />
                                </span>
                            }
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={1}
                            pageCount={pageCount}
                            previousLabel={
                                <span className="border rounded-md flex items-center py-1 pl-1 pr-3 cursor-pointer mx-5 text-sm">
                                    <MdOutlineKeyboardArrowLeft size="20" className=" mb-[-2px]" />
                                    Previous
                                </span>
                            }
                            renderOnZeroPageCount={null}
                            pageLinkClassName="p-2"
                            breakClassName="mx-3"
                            activeClassName="bg-[#146EB4] text-sm text-white rounded-md mx-2 cursor-pointer p-1"
                            containerClassName="flex justify-center text-sm items-center select-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}