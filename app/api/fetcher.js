import axios from "axios";
export const fetchWrapper = (requestObject) => axios(requestObject)
export const fetchConfig = ({ url, params, data = {}, method, user = {} }) => {
    if (!url) return null;
    return {
        url,
        method,
        headers: { "Content-Type": "application/json-patch+json", Authorization: `Bearer ${user.token}` },
        data,
        params,
        redirect: "follow",
    };
};