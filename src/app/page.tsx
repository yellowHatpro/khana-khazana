import getAllCategories from "@/api/getAllCategories";
import {Category} from "@/types/category";
import CategoryCard from "@/components/category-card";
import Carousel from "@/components/carousel";

type GetAllCategoriesResponse = {
  categories: Category[]
}
export default async function Home() {
    const categoriesResponse: GetAllCategoriesResponse = await getAllCategories();
    const categories: Category[] = categoriesResponse.categories
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-b">
            <section>
                <Carousel items={categories}/>
            </section>
            <section>
                <h1 className={"font-hiromisake font-bold text-onTertiary text-2xl p-2"}>
                    SECTION
                </h1>

                <div className={"grid grid-cols-4 child:m-2  "}>
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
