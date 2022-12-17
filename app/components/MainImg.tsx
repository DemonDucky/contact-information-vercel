
export default function MainImg({size, className}: {size?: "sm" | "base" | "lg", className?: string}) {

    let tailwindSize: string

    switch (size) {
        case "sm":
            tailwindSize = "w-40"
            break
        case "base":
            tailwindSize = "w-80"
            break
        case "lg":
            tailwindSize = "w-96"
            break
        default:
            tailwindSize = "w-56"
    }
    return (
        <img className={`${tailwindSize} object-cover min-h-0 min-w-0 rounded-full mb-2 block mx-auto ${className}`}
             src="/images/cat.jpg"
             alt="avatar"/>
    )
}