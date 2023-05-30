import { instance } from '@-services/axios.instance';
import { User, AccountBody } from '@-models/users';

const AUTH_URL = {
    register : `api/auth/register/`,
    login : `api/auth/login`,
    refresh: `token/refresh/`,
};


export const registerUser = async (body: User) => {
    
    return await instance().post(AUTH_URL.register, body);
}

// export const refreshToken = async (body) => {
//     // 'http://localhost:8000/token/refresh/'
//     const response = await instance().post(AUTH_URL.refresh, body);
//     return response;
// }


export const loginUser = async (body: AccountBody) => {
    
    return await instance().post(AUTH_URL.login, body);
}