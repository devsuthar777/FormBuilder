import axios from "axios"
import { useSelector } from "react-redux";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    const token = localStorage.getItem("token");
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : {"Authorisation": "Bearer "+token},
        params: params ? params : null,
    });
}