import {useEffect, useState} from "react";

export default function MainLayout({children, className}: { children: React.ReactNode, className?: string }) {

    const [windowHeight, setWindowHeight] = useState<string>()
    const [windowWidth, setWindowWidth] = useState<string>()

    useEffect(() => {
        setWindowWidth(`${window.innerWidth}px`)
        setWindowHeight(`${window.innerHeight}px`)

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
                height: windowHeight
            }
        }
             className={`bg-gradient-to-tr from-neutral-700 font-base via-gray-700 to-neutral-800 text-white px-4 pb-6 pt-12 ${className}`}>
            {children}
        </div>
    )
}