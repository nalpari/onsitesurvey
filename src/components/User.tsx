'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi } from '@/api/user'
import { logout } from '@/api/auth'
import UserList from '@/components/UserList'

export default function User() {
  const queryClient = useQueryClient()

  const {
    mutate: createUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: userApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-list'] })
    },
  })

  return (
    <>
      <div className="p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => createUser({ username: 'user1', email: 'user1@example.com', password: 'password1' })}
        >
          User Create1
        </button>
      </div>
      <div className="p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => createUser({ username: 'user2', email: 'user2@example.com', password: 'password2' })}
        >
          User Create2
        </button>
      </div>
      <div className="p-4">
        {error && <div>Error: {error.message}</div>}
        {isPending ? <div>Loading...</div> : <UserList />}
      </div>

      <div className="p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  )
}
