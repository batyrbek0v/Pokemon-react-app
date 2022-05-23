import { API } from "./Api";

export const getData = url => {
    return API.GET(url)
}