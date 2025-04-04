import { getIronSession, SessionOptions } from 'iron-session'
import { cookies } from 'next/headers'

export const sessionOptions: SessionOptions = {
  cookieName: 'onsitesurvey_session',
  password: process.env.SESSION_PASSWORD as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production', // HTTPS에서만 쿠키 전송 (production일 때만 true)
    httpOnly: true, // 클라이언트 JavaScript에서 쿠키 접근 차단
    sameSite: 'lax', // 사용자가 외부 사이트의 링크를 클릭해 사이트에 들어올 때 쿠키가 전송됨
    // maxAge: 2147483647, // 최대 유효기간(약 68년)
    maxAge: 60 * 60 * 24 * 30, // 30일
    path: '/', // 쿠키가 유효한 경로 (기본값: 사이트 전체에 대해 유효)
  },
}

export interface SessionData {
  username: string | null
  email: string | null
  isLoggedIn: boolean
}

export const defaultSession: SessionData = {
  username: '',
  email: '',
  isLoggedIn: false,
}

export const getSession = async () => {
  const cookieStore = await cookies()
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions)
  return session
}
