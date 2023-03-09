import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Error } from '../pages';

const Cards = () => {
    const { allCards, loading, error } = useSelector((state) => (state.cards));
    const dispatch = useDispatch();

    return (
        <div>
            {loading && <Loading />}
            {error && <Error message={error} />}
        </div>
    )
}
export default Cards