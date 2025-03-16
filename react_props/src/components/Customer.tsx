// Passing Props through functional component 
import React from "react";

interface IPROPS {
    firstName: string;
    lastName: string;
    pinCode?: number | string;
}

let Customer: React.FC<IPROPS> = ({ firstName, lastName, pinCode }) => {
    return (
        <>
            <h1>Customer Component</h1>
            <p>First Name:- {firstName}</p>
            <p>Last Name:- {lastName}</p>
            {/* <p>PINCODE:- {pinCode}</p> */}
        </>
    )
}

export default Customer;