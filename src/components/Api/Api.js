import axios from "axios";

export const testApi = () => {
    console.log('test api');
}

const url = "http://tvbox.us-east-2.elasticbeanstalk.com"

export const login = async (requestData) => {
    const path = url + "/api/v1/auth/";
    try {
        const response = await axios.post(path, requestData);
        if (response.status === 200) {
            console.log(response.data);
            return response.data;
        }

        return response;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}