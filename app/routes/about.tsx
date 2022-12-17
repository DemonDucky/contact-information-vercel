import NavBar from "~/components/NavBar";
import MainLayout from "~/layouts/MainLayout";
import MainImg from "~/components/MainImg";
import Button from "~/components/Button";

export default function About() {
    return (
        <MainLayout className={"flex justify-center flex-col"}>
            <div className={"justify-center flex flex-col grow"}>
                <MainImg size={"sm"}></MainImg>
                <Button className={"mx-auto my-8"} disabled={true}>About me</Button>
                <p className={"text-sm text-center text-lg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam aspernatur at aut dicta dolore excepturi exercitationem lorem,</p>
            </div>
            <NavBar/>
        </MainLayout>
    )
}