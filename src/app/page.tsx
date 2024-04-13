import getAllCategories from "@/api/getAllCategories";
import {Category} from "@/types/category";
import CategoryCard from "@/components/category-card";

type GetAllCategoriesResponse = {
  categories: Category[]
}
export default async function Home() {
  const categoriesResponse: GetAllCategoriesResponse = await getAllCategories();
  const categories : Category[] = categoriesResponse.categories
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-b">
     <section>
       <h1 className={"font-hiromisake font-bold text-onTertiary text-2xl"}>
         SECTION
       </h1>
       <div className={""}>
         {categories.map((category, index)=> {
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
