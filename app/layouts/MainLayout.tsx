export default function MainLayout({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={`w-screen h-screen bg-gradient-to-tr from-neutral-700 font-base via-gray-700 to-neutral-800 text-white px-4 pb-6 pt-12 ${className}`}>
            {children}
        </div>
    )
}