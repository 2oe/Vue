import axios from "axios"

export function getProductList() {
    return axios.get('/getProductList');
}