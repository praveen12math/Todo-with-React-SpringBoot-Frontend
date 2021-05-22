import {API} from "../backend"

export const signup = user => {
    return fetch(`${API}/signup` ,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err
    })
}




export const signin = user => {
    return fetch(`${API}/signin` , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err
    })
}



export const createTodo = todo => {
    return fetch(`${API}/createTodo` ,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err
    })
}