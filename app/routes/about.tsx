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
                <p className={"text-center text-lg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    architecto consectetur consequatur
                    dolorum hic iusto labore nobis, nostrum, odio porro provident saepe? Autem ea laborum perferendis
                    perspiciatis quasi quod voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci aspernatur autem commodi, consequuntur, dolores doloribus eos est exercitationem facere
                    ipsum modi nam nobis, numquam officia quaerat tempora vel voluptatem voluptatum.</p>
            </div>
            <NavBar/>
        </MainLayout>
    )
}