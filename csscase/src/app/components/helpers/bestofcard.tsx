export default function BestOfCard({ image }: { image: string }) {
    return (
        <div className="flex flex-col rounded-[10px] shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]">
            <div className="flex flex-col">
            <img className="rounded-t-[10px]" src={`/images/${image}.svg`} height={220}/>
            <div className="flex flex-col gap-4 pt-8 px-8">
            <div className="text-2xl font-bold text-white">
                Title
            </div>
            <div className="text-lg font-normal text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
            </div>
            </div>
           <div className="flex p-8">
           <button className="flex border-2 border-white w-full
                    rounded-lg p-4 text-white justify-center gap-4 lg:h-14 lg:items-center">
                <img src="/icons/shopicon.svg" width={24} height={24} />
                <div className="lg:text-xl leading-6 font-medium tracking-wider"> Buy Now</div>
            </button>
           </div>
        </div>
    )
}