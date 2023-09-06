import React from "react"
import { useState } from "react"
import AddCategory from "./Components/AddCategory"
import GifGrid from "./Components/GifGrid"

const ComponentApp =() => {

    const[ categories, setCategories ] = useState(['Genshin Impact - Personajes proporcionados por el Usuario'])

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
        
