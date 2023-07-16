import classNames from "classnames"
import Image from "next/image"

export default function Header() {

    let buttonGroupItems = ["Products", "Solutions", "Pricing", "Resources", "Log In", "Sign up now"]

    return (
        <div className="w-full h-24 p-4 lg:py-6 lg:px-20 flex justify-between bg-[#fffbeb]">
            <div className="text-[#78350F] 
                text-[32px] leading-[35.2px] 
                tracking-normal font-bold
                flex items-center w-[102px]
                h-[35px] self-center">
                Collers
            </div>
            <div className="block lg:hidden">
                <Image src={"/icons/menuicon.svg"} alt="menuicon"
                    width={24} height={24} />
            </div>
            <div className="hidden lg:flex gap-4 text-[#78350F] h-12">
                {
                    buttonGroupItems.map((item: string, i: number) => {
                        return <button key={i}
                            className={classNames("text-base font-medium leading-6 py-3 px-2",
                                {
                                    "border-2 rounded-lg border-[#78350F] px-6 self-center"
                                        : i === buttonGroupItems.length - 1
                                })}>
                            {item}
                        </button>
                    })
                }
            </div>
        </div>
    )
}


//styleName: Heading/5;
