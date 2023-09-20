import { useState } from "react";

export const AddCategory = ({OnAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        OnAddCategory(inputValue);
        setInputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Personaje de Genshin"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
