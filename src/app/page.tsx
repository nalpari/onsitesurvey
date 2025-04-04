import Link from 'next/link'
import User from '@/components/User'
import { cookies } from 'next/headers'
import { getIronSession } from 'iron-session'
import { SessionData, sessionOptions } from '@/libs/session'
import { redirect } from 'next/navigation'

export default async function Home() {
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold">Index</h1>

        <div className="p-4">
          <Link href="/counter">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Zustand Counter Example</button>
          </Link>
        </div>

        <div className="p-4">
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Session Login Example</button>
          </Link>
        </div>

        <User />
      </div>
    </>
  )
}
