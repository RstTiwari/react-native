let myfac8ryBaseUrl = process.env.EXPO_PUBLIC_PROD_URL;
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const authApi = async (path, payload) => {
    let axiosConfig = {
        url: myfac8ryBaseUrl + `auth/${path}`,
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(payload),
    };
    try {
        let response = await axios(axiosConfig);
        console.log(response);
        const data = response.data;
        await AsyncStorage.setItem("token", data ? data.result.token : null);
        return {
            success: data ? data.success : 0,
            result: data ? data.result : null,
            message: data ? data.message : "NerWrokError",
        };
    } catch (error) {
        console.log(error);
        return {
            success: 0,
            result: null,
            message: error.message,
        };
    }
};
export const appApi = async (path, payload) => {
    let axiosConfig = {
        url: myfac8ryBaseUrl + `app/${path}`,
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(payload),
    };
    console.log(axiosConfig,"--");
    try {
        let response = await axios(axiosConfig);
        const data = response.data;
        return {
            success: data ? data.success : 0,
            result: data ? data.result : null,
            message: data ? data.message : "NerWrokError",
        };
    } catch (error) {
        console.log(error.message);
        return {
            success: 0,
            result: null,
            message: error.message,
        };
    }
};
