import BestOfCard from "../helpers/bestofcard";
import SignUpNowBtn from "../helpers/signupnowbtn";

export default function Section2() {

    let items = [
        {
            image: "cardimg1"
        },
        {
            image: "cardimg2"
        },
        {
            image: "cardimg3"
        }
    ]

    return (
        <div className="flex flex-col gap-8 bg-[#0F172A] px-4 py-12 lg:p-20 lg:gap-20 items-center">
            <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-8">
                <div className="text-white text-[32px] lg:text-[56px] font-bold">
                    The best of the best
                </div>
                <SignUpNowBtn color="ffffff" />
            </div>
            <div className="flex flex-col gap-8 lg:gap-12 lg:flex-row">
            {
                items.map((item: { image: string }, i: number) => {
                    return <BestOfCard key={i} image={item.image} />
                })
            }
            </div>
        </div>
    )
}