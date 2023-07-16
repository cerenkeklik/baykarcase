"use client"
import { useEffect, useState } from "react";

type returnedDataType = { userId: string, id: number, title: string, body: string }

export default function Page() {

    const [questions, setQuestions] = useState<returnedDataType[]>([])
    const [current, setCurrent] = useState<number>(0)

    let options = ["A", "B", "C", "D"]

    useEffect(() => {
        getData().then((data) => setQuestions(data));
    }, []);

    function nextQuestion() {
        setCurrent((prev: number) => prev + 1)
    }

    return (
        <div className="flex items-center justify-center h-full">
            <div className='flex flex-col w-11/12 h-5/6 bg-white 
                shadow-xl rounded-2xl py-4 px-2 justify-center 
                items-center gap-12'>
                <div className='text-xl text-slate-800 font-extrabold text-center'>
                    {questions[current]?.title}
                </div>
                <div className="w-full flex flex-col gap-4 items-center">
                    {
                        options.map((option: string, i: number) => {
                            return <button key={i} onClick={nextQuestion}
                                className="flex gap-2 w-4/5 bg-[#F5E278] p-2 rounded-lg">
                                <div>{`${option})`}</div>
                                <div>{questions[current]?.body?.split(" ")?.[i]}</div>
                            </button>
                        })
                    }
                </div>
                <div>{ }</div>

            </div>
        </div>
    )
}

async function getData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
        { cache: 'no-store' })
    const data = await res.json()
    let shuffled = shuffle(data).slice(0, 10)

    return shuffled;
}

function shuffle(a: returnedDataType[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}