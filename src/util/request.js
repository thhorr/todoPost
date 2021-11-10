import axios from "axios";


export const posts = axios.create({
    baseURL : "http://localhost:3000",
});

