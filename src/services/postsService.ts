import {IRes} from "../types";
import {IPost} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const postsService = {
    getAll:():IRes<IPost[]>=> apiService.get(urls.posts.base),
    getById:(id:number):IRes<IPost> => apiService.get(urls.posts.byId(id))
}
export {postsService}