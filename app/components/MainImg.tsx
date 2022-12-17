
export default function MainImg({size, className}: {size?: "sm" | "base" | "lg", className?: string}) {

    let tailwindSize: string

    switch (size) {
        case "sm":
            tailwindSize = "w-20 h-20"
            break
        case "base":
            tailwindSize = "w-80 h-80"
            break
        case "lg":
            tailwindSize = "w-96 h-96"
            break
        default:
            tailwindSize = "w-48 h-48"
    }
    return (
        <img className={`${tailwindSize} object-cover min-h-0 min-w-0 rounded-full mb-2 block mx-auto ${className}`}
             src="/images/cat.webp"
             alt="avatar"/>
    )
}