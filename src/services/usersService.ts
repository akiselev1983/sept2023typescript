import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IUser} from "../interfaces";

const usersService = {
    getAll:():IRes<IUser[]>=> apiService.get(urls.users.base),
    getById:(id:number):IRes<IUser> => apiService.get(urls.users.byId(id))
}
export {usersService}