'use client'

import { useQuery } from '@tanstack/react-query'
import { userApi } from '@/api/user'

export default function UserList() {
  const { data, error, isPending } = useQuery({
    queryKey: ['user-list'],
    queryFn: userApi.getList,
  })

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          {data.map((user: any) => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
      )}
    </div>
  )
}
