import React from "react"
import { useState } from "react"
import { AddCategory, GifGrid } from "./Components"

const ComponentApp =() => {

    const[ categories, setCategories ] = useState([])

    const OnAddCategory = ( category ) => {
        setCategories( list => [...list, category])
    }

    return (
        <>
            <h1>Ingresa tu Personaje de Genshin</h1>

            <AddCategory OnAddCategory={OnAddCategory}/>
            {
                categories.map(
                    (category, key) =>
                    {
                        return <GifGrid category={category} key={key}/>
                    }
                )
            }
        </>
    )    
}

export default ComponentApp;
        
