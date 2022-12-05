import axios from "axios";

const BASE_URL = "https://api.taroneh.ir/api/shop"

const getProducts = async() => {
    const response = await axios.get(BASE_URL);
    return response.data.data;
}
export {getProducts}