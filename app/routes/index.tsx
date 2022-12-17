import MainLayout from "~/layouts/MainLayout";
import NavBar from "~/components/NavBar";
import Button from "~/components/Button";

export default function Index() {
    return (
        <MainLayout className={"flex justify-center flex-col"}>
            <div className={"grow flex flex-col justify-center"}>
                <h1 className={"text-3xl mt-4 mb-6"}>Chào,<br/>Tuấn Anh đây</h1>
                <p className={"text-right my-10"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    accusantium
                    aliquid at, consectetur culpa cupiditate, ducimus et eum expedita harum ipsam ipsum molestias nam
                    nulla officia omnis sed veniam vitae! lorem lorem</p>
                <div className={"flex justify-between w-full"}>
                    <Button>Project</Button>
                    <Button>Resume</Button>
                </div>
            </div>
            <NavBar/>
        </MainLayout>
    )
}
