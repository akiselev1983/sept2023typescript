import React, {FC} from 'react';
import {ICar} from "../../interfaces/carInterface";
import {ISetState} from "../../types/setStateType";
import {carService} from "../../services/carService";

interface IProps{
    car:ICar,
    setCarForUpdate: ISetState<ICar>,
    changeTrigger: ()=> void
}
const Car:FC<IProps> = ({car, setCarForUpdate, changeTrigger}) => {
    const {id, brand, price, year} = car

    const deleteCar = async ()=>{
        await carService.deleteById(id)
        changeTrigger()
    }

    return (
        <div>
            <div>ID: {id}</div>
            <div>BRAND: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>UPDATE</button>
            <button onClick={()=>deleteCar()}>DELETE</button>
        </div>
    );
};

export default Car;