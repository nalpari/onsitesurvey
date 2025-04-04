import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'
import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { SessionData, sessionOptions } from '@/libs/session'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  console.log('🚀 ~ POST ~ username:', username)
  console.log('🚀 ~ POST ~ password:', password)

  const user = await prisma.user.findFirst({
    where: {
      username: username,
      password: password,
    },
  })
  console.log('🚀 ~ POST ~ user:', user)

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const cookieStore = await cookies()
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions)

  session.username = user.username!
  session.email = user.email!
  session.isLoggedIn = true

  await session.save()

  return NextResponse.json(user)
}
