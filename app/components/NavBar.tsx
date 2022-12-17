import {IoHome, IoBook, IoHeart} from "react-icons/io5";
import IconWrapper from "~/components/IconWrapper";

export default function NavBar({className}: {className?: string}) {
    return (
        <div className={`bg-gray-900/40 w-5/6 flex justify-between py-4 px-8 rounded-3xl mx-auto mt-6 text-gray-500 ${className}`}>
            <IconWrapper to={"/contact"}><IoHeart/></IconWrapper>
            <IconWrapper to={"/"}><IoHome/></IconWrapper>
            <IconWrapper to={"/about"}><IoBook/></IconWrapper>
        </div>
    )
}