import {Github, Linkedin} from "lucide-react";

const Footer = () => {
    return (
        <section className={"bg-tertiary text-white flex items-center justify-between w-full p-4"}>
            <div className={"font-hiromisake"}>Khana Khazana</div>
            <div className={"flex child:m-2"}>
                <div>HOME</div>
                <div>MENU</div>
                <div>ABOUT</div>
                <div>MORE</div>
            </div>
            <div className={"child:border child:rounded-full child:m-2"}>
                <div className={"p-2"}>
                    <Linkedin/>
                </div>
                <div className={"p-2"}>
                    <Github/>
                </div>
            </div>
        </section>
    )
}

export default Footer
