import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carsActions} from "../store";

interface IProps extends PropsWithChildren{
   car:ICar
}
const Car:FC<IProps> = ({car}) => {
    const dispatch = useAppDispatch()
    const {id, brand, price, year} = car
    return (
        <div>
            <div>ID: {id}</div>
            <div>BRAND: {brand}</div>
            <div>PRICE: {price}</div>
            <div>YEAR: {year}</div>
            <button onClick={()=>dispatch(carsActions.setCarForUpdate(car))}>UPDATE</button>
            <button onClick={()=>dispatch(carsActions.deleteById({id}))}>DELETE</button>
        </div>
    );
};

export default Car;