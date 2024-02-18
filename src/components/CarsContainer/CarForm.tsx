import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/carInterface";

import {carService} from "../../services/carService";
import {ISetState} from "../../types/setStateType";
import car from "./Car";

interface IProps{
    changeTrigger:()=>void,
    setCarForUpdate:ISetState<ICar>
    carForUpdate:ICar
}

const CarForm:FC<IProps> = ({changeTrigger, setCarForUpdate, carForUpdate}) => {
    const {reset, handleSubmit, register, setValue} = useForm<ICar>()

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate, setValue]);
    const save:SubmitHandler<ICar> = async (car)=>{
        await carService.create(car)
        setCarForUpdate(null)
        changeTrigger()
        reset()
    }
    const update:SubmitHandler<ICar> = async (car)=>{
        await carService.updateById(carForUpdate.id, car)
        changeTrigger()
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input type="" placeholder={'brand'} {...register('brand')}/>
                <input type="" placeholder={'price'} {...register('price')}/>
                <input type="" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate?'UPDATE':'SAVE'}</button>
            </form>
        </div>
    );
};

export default CarForm;