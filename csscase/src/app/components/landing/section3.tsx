import SignUpNowBtn from "../helpers/signupnowbtn"

export default function Section3() {

    let items = [
        "Est et in pharetra magna adipiscing ornare aliquam.",
        "Tellus arcu sed consequat ac velit ut eu blandit.",
        "Ullamcorper ornare in et egestas dolor orci."
    ]

    return (
        <div className="bg-[#fffdf3] pt-4 px-4 pb-14 lg:py-40 lg:px-20">
            <div className="flex flex-col lg:flex-row px-4 py-8 gap-8 lg:gap-20 lg:p-20
             bg-white rounded-[30px] shadow-xl">
                <div className="flex flex-col lg:w-1/2 items-center lg:items-start gap-6">
                    <div className="text-[#0F172A] font-bold
                     text-[32px] lg:text-[56px]">
                        Why join us
                    </div>
                    <div className="flex flex-col gap-2">
                        {
                            items.map((item: string, i: number) => {
                                return <div key={i} className="flex gap-2">
                                    <div>
                                        <img src="/icons/tickicon.svg"
                                            width={24} height={24} />
                                    </div>
                                    <div className="lg:text-xl">{item}</div>
                                </div>
                            })
                        }
                    </div>
                    <SignUpNowBtn color="78350F" />
                </div>
                <div className="lg:w-1/2">
                    <div className="flex justify-center lg:w-full lg:h-full">
                        <iframe className="border-8 border-white rounded-[20px] lg:w-full lg:h-full"
                            src="https://www.youtube.com/embed?v=3-HuCN1wRdc" />
                    </div>

                </div>
            </div>
        </div>
    )
}