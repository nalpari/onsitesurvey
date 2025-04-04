import Login from '@/components/Login'

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Login</h1>
        <Login />
      </div>
    </>
  )
}
