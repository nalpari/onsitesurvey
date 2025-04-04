'use client'

import { useCountStore } from '@/store/counter'

export default function Counter() {
  const { count, increment, decrement, paramSetting, resetCount } = useCountStore()

  return (
    <div className="flex gap-2 items-center justify-center flex-col">
      <div className="text-2xl">{count}</div>
      <div className="flex gap-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>
          -
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>
          +
        </button>
      </div>
      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => paramSetting({ count: 500 })}>
          임의 숫자
        </button>
      </div>
      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={resetCount}>
          리셋
        </button>
      </div>
    </div>
  )
}
