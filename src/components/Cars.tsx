import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import Car from "./Car";
import {carsActions} from "../store";

const Cars = () => {
    const {cars, trigger} = useAppSelector(state => state.cars)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [trigger]);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;