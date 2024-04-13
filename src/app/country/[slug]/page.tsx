import {Meal} from "@/types/meal";
import getMealsByCountry from "@/api/getMealsByCountry";

type CountryPageParams = {
    params: {
        slug: string
    }
}
type GetMealsByCountryResponse = {
    meals: Meal[]
}
const CountryPage = async ({params}: CountryPageParams) => {
    const mealsByCountryResponse : GetMealsByCountryResponse = await getMealsByCountry(params.slug)
    const meals = mealsByCountryResponse.meals
    return (
        <main className={"flex min-h-screen w-full flex-col items-center justify-between p-24 text-b"}>
            { meals.map((meal, index)=>{
                return (
                    <div className={""} key={index}>
                        {meal.strMeal}
                    </div>
                )
            })}
        </main>
    )
}

export default CountryPage
