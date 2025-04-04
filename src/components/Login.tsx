'use client'

import { userApi } from '@/api/user'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()

  const { data, error, isPending } = useQuery({
    queryKey: ['login-user'],
    queryFn: async () => {
      try {
        const result = await userApi.getUser({ username, password })
        router.push('/')
        return result
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          console.log('🚀 ~ handleLogin ~ error:', error.response?.data?.error)
          setUsername('')
          setPassword('')
          setIsLogin(false)
        }
        throw error
      }
    },
    enabled: isLogin,
    retry: false,
  })

  const handleLogin = async () => {
    console.log('🚀 ~ Login ~ username:', username)
    console.log('🚀 ~ Login ~ password:', password)

    setIsLogin(true)
  }

  return (
    <>
      <div className="w-full max-w-sm min-w-[200px] m-4">
        <input
          type="text"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="w-full max-w-sm min-w-[200px] m-4">
        <input
          type="password"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
        Login
      </button>
    </>
  )
}
