import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export const GET = async () => {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}
