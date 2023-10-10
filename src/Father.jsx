import { useState, useCallback, useMemo } from "react"
import { Son } from "./Son";

export const Father = () => {
    const list = [2,4,6,8,10];
    const [valor, setValor] = useState(1);

    const increment = useCallback(
        ( count )=>{
            setValor( value => value + count)
        },[]
    )

    return (
        <div>
            <h1> Father App </h1>
            <p> Total: {valor}</p>
            <hr/>
            {
                list.map((n, idx) => {
                    return<Son key={idx} numero={n} increment={increment}></Son>
                })
            }
        </div>
    )
}