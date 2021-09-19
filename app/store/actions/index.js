import { baseURL } from "../../api/config";
import requestProcessor from "../../api/requestProcessor";

export const FetchRandomNumber = 'FETCH_RANDOM_NUMBER';
export const UpdateRounds = 'UPDATE_ROUNDS';

export const getRandomNumber = async() => {
    return requestProcessor
    .sendGet(baseURL())
    .then(async(res) => {
        if (res && String(res.status).startsWith("2")) {
           return res.data;
        }
    })
    .catch((err) => {
        console.log(err, "err");
    })
    .finally(() => { });
};