import Image from "next/image";
import SignUpNowBtn from "../helpers/signupnowbtn";

export default function Section1Up() {
    return (
        <div className="columns-2 flex flex-col md:flex-row gap-8 xl:gap-20 md:p-20 px-4 py-12">
            <div className="w-100 xl:w-1/2 flex flex-col gap-8 xl:gap-8 xl:justify-center xl:h-auto">
                <div className="text-[#0F172A] text-[56px] md:text-7xl md:leading-[79.2px] 
                xl:whitespace-nowrap font-extrabold md:font-bold text-center md:text-left tracking-normal leading-[61.6px]" >
                    Collectible Sneakers
                </div>
                <div className="text-[#0F172A] text-center xl:text-left xl:text-lg">Sit elit feugiat turpis sed integer integer accumsan turpis.
                    Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</div>
                <div className="w-100 flex gap-4 justify-center md:justify-start">
                    <SignUpNowBtn color="78350F" />
                    <button className="w-100 flex justify-center items-center gap-1">
                        <Image src={"/icons/playicon.svg"} alt="playicon" width={24} height={24} />
                        <div className="text-[#78350F] text-base font-medium">Watch Demo</div>
                    </button>
                </div>
            </div>
            <div className="w-auto md:w-1/2 md:h-fit flex justify-center items-center">
                <div className="relative flex justify-center">
                <div className="bg-[#FBBF24] rounded-[50px] w-[270px] 
                        h-[270px] md:flex-1 absolute md:w-4/5 md:h-full top-10" />
                <Image className="w-full md:flex-1 w:h-full z-10 relative object-contain"
                    src="/images/sneaker.svg" alt="sneaker" width={100} height={0} />
                </div>
            </div>
        </div>
    )
}


{/* <div className="flex flex-col lg:flex-row lg:columns-2 justify-center lg:py-24 gap-14">
<div className="w-100 flex flex-col lg:w-1/2 gap-8 self-center">
    <div className="text-center text-[56px] lg:text-7xl font-bold 
        leading-[79.2px] text-[#0F172A]">
        Collectible Sneakers
    </div>
    <div className="text-lg font-normal break-all text-[#0F172A]">
        Sit elit feugiat turpis sed integer integer accumsan turpis.
        Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
    </div>
    <div className="w-100 flex gap-4">
        <button
            className="text-[#78350F] border-2
             border-[#78350F] rounded-lg py-3 px-8 text-xl font-medium">
            Sign up now
        </button>
        <button className="flex items-center gap-2">
            <Image src={"/icons/playicon.svg"} alt="playicon" width={24} height={24} />
            <div className="text-[#78350F] text-base font-medium">Watch Demo</div>
        </button>
    </div>
</div>
<div className="w-100 flex justify-center items-center">
    <div className="bg-[#FBBF24] rounded-[50px] w-[367px] h-[372px] absolute" />
    <Image className="w-full h-auto z-10 relative" src="/images/sneaker.svg" alt="sneaker" width={100} height={0} />
</div>
</div> */}