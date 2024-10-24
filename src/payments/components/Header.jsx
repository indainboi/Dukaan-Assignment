import { GoQuestion } from "react-icons/go";
import { SearchBar } from "../ui/SearchBar";
import { RiMessage2Fill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header() {
    return <div className="w-full flex justify-between px-8 py-3 gap-4 bg-white">
        <div className="w-full flex gap-4 items-center">
            <h4 className="text-[15px] leading-[22px]">Payments</h4>
            <small className="flex items-center gap-1.5 text-xs text-gray-600">
                <GoQuestion size="14" />
                How it works
            </small>
        </div>
        <div className="w-full">
            <SearchBar placeholder={"Search features, tutorials, etc."} />
        </div>
        <div className="flex justify-end w-full gap-3">
            <div className="bg-[#e6e6e6] rounded-full w-10 h-10 flex justify-center items-center">
                <RiMessage2Fill />
            </div>
            <div className="bg-[#e6e6e6] rounded-full w-10 h-10 flex justify-center items-center">
                <TiArrowSortedDown />
            </div>
        </div>
    </div>
}