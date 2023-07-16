"use client"
import { useEffect, useState } from "react";
import ProgressBar from "../helpers/progressbar";
import classNames from "classnames";

type returnedDataType = { userId: string, id: number, title: string, body: string }

export default function Page() {

    const [questions, setQuestions] = useState<returnedDataType[]>([])
    const [current, setCurrent] = useState<number>(0)
    const [timer, setTimer] = useState(30)
    const [areButtonsDisabled, setAreButtonsDisabled] = useState(true)
    const [isFinished, setIsFinished] = useState(false)
    const [result, setResult] = useState<{ option: string | null, question: number }[]>([])

    let options = ["A", "B", "C", "D"]

    useEffect(() => {
        getData().then((data) => setQuestions(data));
    }, []);

    function nextQuestion(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        option: string | null = null) {

        console.log("ques", current + 1)
        e?.preventDefault()
        setResult((prev) => [...prev, { option: option, question: current + 1 }])
        setCurrent((prev: number) => prev + 1)
        setTimer(30)
        setAreButtonsDisabled(true)
    }

    useEffect(() => {
        setTimer(30)
        if (current === 10) setIsFinished(true)
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [current]);

    useEffect(() => {
        if (timer <= 20) setAreButtonsDisabled(false)
        if (timer < 0 && !isFinished)  nextQuestion()
    }, [timer])

    return (
        <div className="flex items-center justify-center h-full">
            <div className='flex flex-col w-11/12 h-5/6 bg-white 
                shadow-xl rounded-2xl 
                items-center '>
                {
                    isFinished ?
                        <div className="w-full h-full flex justify-center items-center p-1">
                            <table className="table-auto text-center border-separate border-spacing-y-2 border-spacing-x-4">
                                <thead>
                                    <tr>
                                        <th>Question</th>
                                        <th>Your Choice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map((item: { option: string | null, question: number },
                                            i: number) => {
                                            return <tr key={i} className={i%2 === 0 ? "bg-slate-300" : ""}>
                                                <td>{`${item.question}`}</td>
                                                <td>{item.option ? item.option : "-"}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div> :
                        <>
                            <ProgressBar progress={((30 - timer) * 100 / 30)} />
                            <div className="flex gap-12 flex-col  py-4 px-2 justify-center h-full w-full">
                                <div className='text-xl text-slate-800 font-extrabold text-center'>
                                    {questions[current]?.title}
                                </div>
                                <div className="w-full flex flex-col gap-4 items-center">
                                    {
                                        options.map((option: string, i: number) => {
                                            return <button key={i} onClick={(e) => nextQuestion(e, option)}
                                                className={classNames("flex gap-2 w-4/5 bg-[#F5E278] p-2 rounded-lg",
                                                    { "bg-[#f5e27854]": areButtonsDisabled })}
                                                disabled={areButtonsDisabled}>
                                                <div>{`${option})`}</div>
                                                <div>{questions[current]?.body?.split(" ")?.[i]}</div>
                                            </button>
                                        })
                                    }
                                </div>
                            </div></>
                }


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