import {BASE_API} from "@/util/constants";

export default async function getMealsByCountry(country: string) {
    const res = await fetch(`${BASE_API}/filter.php?a=${country}`, {
        method: 'GET',
    })
    if (!res.ok) return Error("Something went wrong")
    return res.json()
}
