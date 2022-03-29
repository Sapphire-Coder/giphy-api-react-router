import axios from 'axios'
const RANDOM_URL = 'https://api.giphy.com/v1/gifs/random?api_key=aw9LlY3J64jUwhh4IV7lyPin4HJmj9CU'
const TRENDING_URL = 'https://api.giphy.com/v1/gifs/trending?api_key=aw9LlY3J64jUwhh4IV7lyPin4HJmj9CU'
const SEARCH_URL = {
    base: 'https://api.giphy.com/v1/gifs/search?api_key=aw9LlY3J64jUwhh4IV7lyPin4HJmj9CU&',
    q: 'q=',
    limit: '&limit=25&offset=0&rating=g&lang=en',
}

export function getRandom() {
    const response = axios.get(RANDOM_URL)
    return response
}

export function getTrending() {
    const response = axios.get(TRENDING_URL)
    return response
}

export const getSearch = search => {
    const response = axios.get(`${SEARCH_URL.base}${SEARCH_URL.q}${search}${SEARCH_URL.limit}`)
    return response
}