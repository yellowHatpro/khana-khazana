import getAllCategories from "@/api/getAllCategories";
import {Category} from "@/types/category";
import CategoryCard from "@/components/category-card";
import Carousel from "@/components/carousel";
import {Area} from "@/types/area";
import getAllAreas from "@/api/getAllAreas";
import Link from "next/link";

type GetAllCategoriesResponse = {
  categories: Category[]
}
type GetAllAreasResponse = {
    meals: Area[]
}
export default async function Home() {
    const categoriesResponse: GetAllCategoriesResponse = await getAllCategories()
    const areasResponse: GetAllAreasResponse = await getAllAreas()
    const categories: Category[] = categoriesResponse.categories
    const areas: Area[] = areasResponse.meals
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 text-b ">
            <section>
                <Carousel items={categories}/>
            </section>
            <section className={"grid lg:grid-cols-10 p-4 sm:grid-cols-4 md:grid-cols-6"}>
                {areas.map((area, index)=> {
                    return (
                        <h1 className={"text-onPrimary hover:text-amber-700 hover:cursor-pointer font-hiromisake font-black text-xl "} key={index}>
                            <Link href={`/country/${area.strArea}`}>
                                {area.strArea}
                            </Link>
                        </h1>
                    )
                })}
            </section>
            <section>
                <h1 className={"font-hiromisake font-bold text-onTertiary text-2xl p-2"}>
                    CATEGORIES
                </h1>

                <div className={"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 child:m-2  "}>
                    {categories.map((category, index) => {
                        return (
                            <CategoryCard
                                key={index}
                                category={category}/>
                        )
                    })}
                </div>
            </section>
        </main>
    );
}
