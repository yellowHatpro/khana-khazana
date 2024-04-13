import {FullMeal} from "@/types/full-meal";
import {getMealByName} from "@/api/getMealByName";
import Image from "next/image";

type MealPageProps = {
    params: {
        slug: string
    }
}

type GetMealResponse = {
    meals: FullMeal[]
}

const MealPage = async ({params}: MealPageProps) => {
    const mealResponse : GetMealResponse = await getMealByName(params.slug)
    const meal = mealResponse.meals[0]
    return (
        <main className={"flex min-h-screen w-full flex-col items-center justify-between p-24 text-b"}>
            <section>
                <h1 className={"font-bold font-hiromisake text-onTertiary text-3xl"}>{meal.strMeal}</h1>
                <Image
                    className={"h-96 w-96 rounded-lg"}
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    height={200}
                    width={200}/>
                <p className={"text-onTertiary p-4"}>
                    {meal.strInstructions}
                </p>
            </section>
        </main>
    )
}
export default MealPage
