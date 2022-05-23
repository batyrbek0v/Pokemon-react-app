const BASE_URL = 'https://pokeapi.co/api/v2/'

export const API = {
    GET: url => { 
        return fetch(`${BASE_URL}${url}`)
    },
}