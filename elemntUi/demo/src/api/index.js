import axios from "axios"

export function getCarouselList() {
    return axios.get('http://localhost:8081/getCarouselList');
}
export function getHotPerform() {
    return axios.get('http://localhost:8081/getHotPerform');
}
export function getTopList() {
    return axios.get('http://localhost:8081/getTopList');
}