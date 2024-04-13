import {LucideShoppingBasket, UserCircle} from "lucide-react";

const NAV_ITEMS = [
    "Home",
    "Menu",
    "About",
    "More"
]

const Navbar = () => {
    return (
        <nav className={"flex items-center justify-between p-4 border-b border-b-onPrimary w-full text-onTertiary"}>
            <h1 className={"font-hiromisake"}>Khana Khazana</h1>
            <ul className={"flex child:mx-4 font-semibold"}>
                {NAV_ITEMS.map((item,index)=>{
                    return(
                        <li key={index}>
                            <h1>{item}</h1>
                        </li>
                    )
                })}
            </ul>
            <div className={"flex child:m-2"}>
                <LucideShoppingBasket/>
                <UserCircle/>
            </div>
        </nav>
    );
}

export default Navbar
