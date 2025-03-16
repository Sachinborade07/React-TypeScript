import React from "react";
import { useState } from "react";

interface Istate {
    name: string;
    title: string;
}

let FunComponent: React.FC<Istate> = () => {
    const [state] = useState({
        name: "Sachin",
        title: "THIS IS REACT STATE"
    });
    return (
        <>
            <h1> Welcome to React State </h1>
            <p> Name:- {state.name} </p>
            <p> Title:- {state.title} </p>
        </>
    )

}

export default FunComponent;