import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {carService} from "../../services";
import {ICar} from "../../interfaces";
import {AxiosError} from "axios";

interface IState{
    cars:ICar[],
    carForUpdate:ICar,
    trigger:boolean
}

const initialState:IState= {
    cars:[],
    carForUpdate:null,
    trigger:null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await carService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const create = createAsyncThunk<void, {car:ICar}>(
    'carSlice/create',
    async ({car}, {rejectWithValue})=>{
        try {
            await carService.create(car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const deleteById = createAsyncThunk<void, {id:number}>(
    'carSlice/deleteById',
    async ({id}, {rejectWithValue})=>{
        try {
            await carService.deleteById(id)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const updateById = createAsyncThunk<void, {id:number,car:ICar}>(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue})=>{
        try {
            await carService.updateById(id, car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.cars=action.payload
            })
            .addCase(create.fulfilled, state => {})
            .addCase(deleteById.fulfilled, state => {})
            .addMatcher(isFulfilled(create, deleteById, updateById), state => {
                state.trigger=!state.trigger
            })

})

const {reducer:carsReducer, actions} = carSlice

const carsActions = {
    ...actions,
    getAll,
    create,
    deleteById,
    updateById
}

export {carsActions,carsReducer}