import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b03f5295-3f98-4ac6-b7a4-2ccbc9578321'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    getProfile(id) {
        console.warn('obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(id);
        }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id=23108) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status
        })
    }
}

export const authAPI = {
    authUser() {
        return instance.get('auth/me')
    }
}


