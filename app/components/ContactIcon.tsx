export default function ContactIcon({icon, children, link}: { icon: React.ReactNode, children: string, link: string }) {
    return (
        <a target={"_blank"} rel={"noreferrer"} href={`https://${link}`} className={"flex flex-col items-center mx-auto px-6 py-4 rounded-lg"}>
            <i className={"text-3xl"}>{icon}</i>
            <p className={"text-sm"}>{children}</p>
        </a>
    )
}