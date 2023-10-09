import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"
import { GifGrid } from "./Components/GifGrid"

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([])

    const OnAddCategory = (category) => {
        setCategories( list => [...list, category])
    }

    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory OnAddCategory={OnAddCategory} />
            {
                categories.map(
                    (category, key) =>
                {
                    return <GifGrid category={category} key={key} />
                }
                )    
            }
        </>
    )
}

