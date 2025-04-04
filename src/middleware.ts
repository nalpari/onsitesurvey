import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { getIronSession } from 'iron-session'
import { SessionData, sessionOptions } from './libs/session'

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies()
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions)
  if (!session.isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Apply the middleware to all pages except:
// 1. /dashboard (exclude this specific route)
// 2. /admin/* (exclude all routes under /admin)
// 3. /_next/* (exclude Next.js static and image assets)
export const config = {
  matcher: ['/((?!dashboard|login|admin|api|_next/static|_next/image|favicon.ico).*)'],
}
