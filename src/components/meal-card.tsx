import Image from "next/image";
import {Meal} from "@/types/meal";
import Link from "next/link";

type MealCardProps = {
    meal: Meal
}
const MealCard = ({meal}: MealCardProps) => {
    return (
        <div className={"flex flex-col border rounded-tl-3xl rounded-br-3xl border-tertiary p-4 text-onTertiary"}>
            <Image
                className={"w-full h-full"}
                src={meal.strMealThumb}
                height={100}
                width={100}
                alt={meal.strMeal}
            />
            <h1 className={"font-hiromisake text-onTertiary"}>{meal.strMeal}</h1>
            <button
                className={"text-secondary font-hiromisake border rounded-tl-xl rounded-br-xl border-secondary"}>
                <Link href={`/meal/${meal.strMeal}`} className={"w-full h-full"}>
                    Explore
                </Link>
            </button>
        </div>
    )
}

export default MealCard
