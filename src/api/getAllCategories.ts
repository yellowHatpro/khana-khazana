import {BASE_API} from "@/util/constants";

export default async function getAllCategories() {
    const res = await fetch(`${BASE_API}/categories.php`)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
