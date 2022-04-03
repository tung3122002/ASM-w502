import axios from "axios";
const intance = axios.create({
    baseURL:"http://localhost:8000/api"
})
export default intance;