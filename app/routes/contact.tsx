import NavBar from "~/components/NavBar";
import MainLayout from "~/layouts/MainLayout";
import MainImg from "~/components/MainImg";
import Button from "~/components/Button";
import {IoHeart} from "react-icons/io5";
import {AiOutlineInstagram, AiOutlineMail, AiOutlineGithub} from "react-icons/ai";
import {MdOutlineFacebook} from "react-icons/md";
import ContactIcon from "~/components/ContactIcon";

export default function Contact() {
    return (
        <MainLayout className={"flex flex-col justify-center"}>
            <div className={"justify-center flex flex-col grow"}>
                <MainImg size={"sm"}></MainImg>
                <Button className={"mx-auto my-4"} disabled={true}>Contact</Button>
                <h3 className={"text-center font-bold text-2xl mt-4 mb-2"}>Get In Touch With Me</h3>
                <IoHeart className={"mb-6 w-full text-5xl text-red-600"}/>
                <div className={"grid grid-cols-2 gap-y-8 gap-x-2"}>
                    <ContactIcon link={"instagram.com/tuan.anhlg"} icon={<AiOutlineInstagram/>}>tuan.anhlg</ContactIcon>
                    <ContactIcon link={"facebook.com/vit.conn"} icon={<MdOutlineFacebook/>}>vit.conn</ContactIcon>
                    <ContactIcon link={"google.com/mail"} icon={<AiOutlineMail/>}>hoangtuan@duck.com</ContactIcon>
                    <ContactIcon link={"github.com/demonducky"} icon={<AiOutlineGithub/>}>demonducky</ContactIcon>
                </div>
            </div>
            <NavBar/>
        </MainLayout>
    )
}