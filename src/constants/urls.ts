const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users'
const comments = '/comments'
const posts = '/posts'

const urls = {
    users:{
        base:users,
        byId:(id:number):string=>`${users}/${id}`
    },
    posts:{
        base:posts,
        byId:(id:number):string=>`${posts}/${id}`
    }
}
export {baseURL,urls}