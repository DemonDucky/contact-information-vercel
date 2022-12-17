import {NavLink} from "@remix-run/react";

export default function IconWrapper({children, to}: { children: React.ReactNode, to: string }) {
    return (
        <NavLink className={"px-4 py-1"} to={to}>{({isActive}) => (
            <i className={`text-2xl ${isActive ? "text-white" : "text-gray-500"}`}>{children}</i>
        )
        }</NavLink>

    )
}