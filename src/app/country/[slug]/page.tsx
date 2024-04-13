import {Meal} from "@/types/meal";
import getMealsByCountry from "@/api/getMealsByCountry";
import MealCard from "@/components/meal-card";

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
            <h1 className={"font-hiromisake text-onTertiary font-bold text-4xl"}>{params.slug}</h1>
           <section className={"grid lg:grid-cols-4 md:grid-cols-3 child:m-2"}>
               { meals.map((meal, index)=>{
                   return (
                       <div className={""} key={index}>
                           <MealCard meal={meal}/>
                       </div>
                   )
               })}
           </section>
        </main>
    )
}

export default CountryPage
