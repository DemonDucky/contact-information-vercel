import NavBar from "~/components/NavBar";
import Button from "~/components/Button";
import MainImg from "~/components/MainImg";

export default function Index() {
    return (
            <>
                <div className={"grow flex flex-col justify-center"}>
                    <MainImg size={"sm"}/>
                    <h1 className={"text-3xl my-2"}>Chào,<br/>Tuấn Anh đây</h1>
                    <p className={"text-right my-6"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                        accusantium
                        aliquid at, consectetur culpam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                        amet architecto asperiores consectetur debitis dolore dolorem doloremque ducimus eligendi facere
                    </p>
                    <div className={"flex justify-between w-full"}>
                        <Button>Project</Button>
                        <Button>Resume</Button>
                    </div>
                </div>
                <NavBar/>
            </>
    )
}