import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../hooks";
import {ICar} from "../interfaces";
import {carsActions} from "../store";
import car from "./Car";

const CarsForm = () => {
    const {cars, trigger, carForUpdate} = useAppSelector(state => state.cars)

    const dispatch = useAppDispatch()

    const {reset, handleSubmit, setValue, register} = useForm<ICar>()

    const save:SubmitHandler<ICar> = (car)=>{
        dispatch(carsActions.create({car}))
        reset()
    }
    const update:SubmitHandler<ICar> = (car)  =>{
        dispatch(carsActions.updateById({id:carForUpdate.id, car}))
        reset()
    }

    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder="brand" {...register('brand')}/>
            <input type="text" placeholder="price" {...register('price')}/>
            <input type="text" placeholder="year" {...register('year')}/>
            <button>{carForUpdate?'UPDATE':'SAVE'}</button>
        </form>
    );
};

export default CarsForm;