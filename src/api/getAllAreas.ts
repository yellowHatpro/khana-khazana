import {BASE_API} from "@/util/constants";

export default async function getAllAreas() {
    const res = await fetch(`${BASE_API}/list.php?a=list`)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
