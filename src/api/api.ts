import axios from 'axios';

const instance = axios.create({
    baseURL        : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers        : {'API-KEY': '4a92b17f-3163-41f6-abf7-d5dd98a52bbd'}
});

export type MeResponseType = {
    data: {userId: string, email: string, login: string}
    resultCode: number
    messages: Array<string>
}
export type GetUsersResponseType = {

}

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    follow(userId:string) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`);
    }
};

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    }
};

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`);
    }
};
