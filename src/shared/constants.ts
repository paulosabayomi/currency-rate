import axios from "axios";

const API_KEY: string = "RIBXT3XYLI69PC0Q";
// const API_KEY = "demo"; // uncomment when testing and use VPN when rate limit has been exceeded

export const STORAGE_NAME: string = "_curr_rates";

export const axios_instance = axios.create({
    baseURL: 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&apikey='+API_KEY,
    timeout: 10000,
});