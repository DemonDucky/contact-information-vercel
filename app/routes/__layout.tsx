import {useLayoutEffect, useState} from "react";
import {Outlet} from "@remix-run/react";

export default function __layout() {

    const [windowHeight, setWindowHeight] = useState<string>()
    const [windowWidth, setWindowWidth] = useState<string>()
    const [paddingTop, setPaddingTop] = useState<string>()

    useLayoutEffect(() => {

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        isIOS ? setPaddingTop('3rem') : setPaddingTop('1rem')

        function resizeWindow() {
            setWindowWidth(window.innerWidth < 1024 ? `${window.innerWidth}px` : `1024px`)
            setWindowHeight(`${window.innerHeight}px`)
        }

        resizeWindow()

        window.addEventListener("resize", resizeWindow)

        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])

    console.log("test")

    return (
        <div style={
            {
                width: windowWidth,
                margin: "0 auto",
                height: windowHeight,
                paddingTop: paddingTop
            }
        }
             className={"bg-gradient-to-tr from-neutral-700 font-base via-gray-700 to-neutral-800 text-white px-4 pb-6 flex flex-col justify-center"}>
            <Outlet/>
        </div>
    )
}