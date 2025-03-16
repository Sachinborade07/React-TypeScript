// Passing Props through class component

import React from "react";
interface IPROPS {
    userId: number;
    userName: string;
}

export default class Users extends React.Component<IPROPS> {
    // creating the constructor 
    constructor(props: IPROPS) {
        super(props)
    }

    render() {
        // destructuring using this.props
        // let { userId, userName } = this.props
        return (
            <>
                <h1> Welcome to Class Component (USERS) </h1>
                <p>User ID is : {this.props.userId}</p>
                <p>User Name is : {this.props.userName} </p>

                {/* can be used while destructuring */}
                {/* <p>User ID is : {userId}</p>
                <p>User Name is : {userName} </p> */}
            </>
        )
    }
}
