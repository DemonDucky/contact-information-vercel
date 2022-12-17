export default function Button({children, disabled = false, className}: {children: React.ReactNode, disabled?: boolean, className?: string}) {
    return (
        <button className={`text-center px-8 py-2 uppercase bg-gray-900/40 rounded-3xl ${disabled ? "text-xl" : null} ${className}`} disabled={disabled}>{children}</button>
    )
}