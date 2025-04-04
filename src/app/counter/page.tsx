import Counter from '@/components/Counter'

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold">Counter</h1>
        <div className="p-4">
          <Counter />
        </div>
      </div>
    </>
  )
}
