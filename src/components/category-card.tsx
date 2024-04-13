import {Category} from "@/types/category";
import Image from "next/image";

type CategoryCardProps = {
    category: Category
}
const CategoryCard = ({category}: CategoryCardProps) => {
  return (
      <div className={"flex flex-col border rounded-tl-3xl rounded-br-3xl border-tertiary p-4 text-onTertiary"}>
        <Image
            className={"w-full h-full"}
            src={category.strCategoryThumb}
            height={100}
            width={100}
            alt={category.strCategory}
        />
        <h1 className={"font-hiromisake text-onTertiary"}>{category.strCategory}</h1>
        <button className={"text-secondary font-hiromisake border rounded-tl-xl rounded-br-xl border-secondary"}>Explore</button>
      </div>
  )
}

export default CategoryCard
