import React from "react";
import { useCounter } from "../Hooks/useCounter";
import { useFetch } from "../Hooks/useFetch";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)
    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    return(
    <>
        <h1>Breaking Bad API</h1>
        <hr />  
        {
            isLoading ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            ) : (
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{data[0].quote}</p>
                    <footer className="blockquote-footer">{data[0].author}</footer>
                </blockquote>
            )
        }

        <button className="btn btn-primary" onClick={() => increment()}>Siguiente Quest</button>
    </>
    )
}