import {BASE_API} from "@/util/constants";

export async function getMealByName(name: string) {
    const res = await fetch(`${BASE_API}/search.php?s=${name}`, {
        method: 'GET'
    })
    if (!res.ok) return Error("Something went wrong!")
    return res.json()
}
