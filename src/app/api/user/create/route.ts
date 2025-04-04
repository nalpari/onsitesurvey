import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, email, password } = body

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
        updated_at: new Date(),
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 })
  }
}
