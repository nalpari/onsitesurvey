import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="p-4">
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">HOME</button>
        </Link>
      </div>
    </>
  )
}
