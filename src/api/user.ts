import { axiosInstance } from '@/libs/axios'

export interface UserData {
  username: string
  email: string
  password: string
}

export interface User {
  id: number
  username: string
  email: string
  created_at: string
  updated_at: string
}

export interface LoginData {
  username: string
  password: string
}

export const userApi = {
  create: async (data: UserData): Promise<User> => {
    const response = await axiosInstance.post<User>('/api/user/create', data)
    return response.data
  },

  getList: async (): Promise<User[]> => {
    const response = await axiosInstance.get<User[]>('/api/user/list')
    return response.data
  },

  getUser: async (data: LoginData): Promise<User> => {
    const response = await axiosInstance.post<User>(`/api/user`, data)
    return response.data
  },
}
