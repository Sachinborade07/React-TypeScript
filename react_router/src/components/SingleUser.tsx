import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface IParams {
    id: number;
}

const SingleUser: React.FC = () => {
    const { id } = useParams<IParams | any>();
    return (
        <>
            <h1> Single User Details Having id {id} </h1>
            <Link to={'/'} > HOME </Link>
        </>
    )

}

export default SingleUser