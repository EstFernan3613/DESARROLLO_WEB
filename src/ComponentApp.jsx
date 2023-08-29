import { useState } from "react"

const ComponentApp =() => {

    // Almacenamiento de las categorias
    const[ categories, setCategories ] = useState([])
    // Control del valor del Input Inicial
    const[category, setCategory] = useState('')

    // Funcion para agregar una categoria

    const AddCategory = () => {
          // Actualiza el estado de "categories" utilizando una función de actualización.
        // La función recibe el estado anterior como argumento y devuelve el nuevo estado.
        // Aquí, estamos agregando la nueva categoría al estado anterior usando el operador spread (...) y el valor de "category".
        setCategories( list => [...list, category])
        setCategory('')
    }

    const SetCategoryOtro = (evt) => {
        setCategory( evt.target.value )
    }


    return (
        <>
        <h1>GifExpert</h1>
        <input type="text" value={category}
        onChange={(event) => SetCategoryOtro(event)}/>
        <button onClick={() => AddCategory()}> Añadir Categoria </button>
        <ol>
            {
                categories.map(
                    (category, key) =>
                    {
                        return <li key={ key }>{ category }</li>
                    }
                    )
                }
        </ol>
        </>
    )
}

export default ComponentApp;