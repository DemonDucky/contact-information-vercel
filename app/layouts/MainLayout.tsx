import {useLayoutEffect, useState} from "react";

export default function MainLayout({children, className}: { children: React.ReactNode, className?: string }) {

    const [windowHeight, setWindowHeight] = useState<string>()
    const [windowWidth, setWindowWidth] = useState<string>()
    const [paddingTop, setPaddingTop] = useState<string>()

    useLayoutEffect(() => {
        setWindowWidth(`${window.innerWidth}px`)
        setWindowHeight(`${window.innerHeight}px`)

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        isIOS ? setPaddingTop('3rem') : setPaddingTop('1rem')

        function resizeWindow() {
            setWindowWidth(`${window.innerWidth}px`)
            setWindowHeight(`${window.innerHeight}px`)
        }

        window.addEventListener("resize", resizeWindow)

        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])

    return (
        <div style={
            {
                width: windowWidth,
                height: windowHeight,
                paddingTop: paddingTop
            }
        }
             className={`bg-gradient-to-tr from-neutral-700 font-base via-gray-700 to-neutral-800 text-white px-4 pb-6 ${className}`}>
            {children}
        </div>
    )
}