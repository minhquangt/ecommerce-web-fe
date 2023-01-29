import axios from 'axios';

const axiosNormal = axios.create({
    baseURL: 'https://ecommerce-be-web.vercel.app',
});

export default axiosNormal;
