import axios from "axios";

export const api = axios.create({
    baseURL: 'https://ds.zhuling.net.cn',
    timeout: 2000
});

