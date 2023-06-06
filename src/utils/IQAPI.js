import { get, post, put } from './APICaller';

export const getRegister = (formData) => {
    return post(`/user/register`, formData);
}

export const getTest = (name, studentID) => {
    return get(`/user/start/${name}/${studentID}`);
}

export const getRank = (studentID) => {
    return get(`/user/scoreboard`, {}, { studentID });
}

export const submitTest = (requestBody) => {
    return put(`/user/end`, requestBody);
}

export const getResult = (studentID) => {
    return get(`/user/${studentID}`);
}