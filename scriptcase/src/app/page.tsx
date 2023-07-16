"use client"

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  function GoQuiz (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    router.push('/quiz')
    
  }

  return (
    <main className="flex items-center justify-center">
      <div className='flex flex-col w-11/12 h-5/6 bg-white 
      shadow-xl rounded-2xl py-4 px-2 justify-center items-center gap-20'>
        <div className='text-4xl text-slate-800 font-extrabold'>
          Baykar Quiz
        </div>
        <button onClick={(e) => GoQuiz(e) }
          className='w-2/3 bg-[#F5E278] py-3 rounded-2xl'>
          START
        </button>
      </div>
    </main>
  )
}

