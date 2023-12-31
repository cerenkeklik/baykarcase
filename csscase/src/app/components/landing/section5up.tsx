import classNames from "classnames"

export default function Section5Up() {

    let buttonList = [
        {
            icon: "section5-1",
            title: "Bibendum tellus"
        },
        {
            icon: "section5-2",
            title: "Cras eget"
        },
        {
            icon: "section5-3",
            title: "Dolor pharetra"
        },
        {
            icon: "section5-4",
            title: "Amet, fringilla"
        },
        {
            icon: "section5-5",
            title: "Amet nibh"
        },
        {
            icon: "section5-6",
            title: "Sed velit"
        }
    ]

    return (
        <div className="flex flex-col gap-8 py-12 px-4 lg:gap-20 lg:px-20 lg:pt-20 lg:pb-32 bg-[#fffdf3]  ">
            <div className="flex flex-col gap-8 text-center lg:text-left">
                <div className="text-[32px] font-bold lg:text-[56px] lg:font-extrabold">
                    Grow your collection
                </div>
                <div className="text-base font-normal leading-[22.4px] lg:font-base lg:text-lg">
                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 h-[350px]">
                <div className="relative grid w-full lg:h-full lg:flex lg:w-1/3 bg-[#fffdf3] gap-4 lg:flex-row">
                    <div className="absolute lg:w-full lg:flex lg:flex-col lg:gap-4 w-full grid grid-flow-col gap-8 justify-start overflow-x-auto scroll-smooth bg-[#fffdf3]">
                        {
                            buttonList.map((item: { icon: string, title: string }, i: number) => {
                                return <div key={i} className={classNames("flex w-fit p-4", { "shadow-lg bg-white": i === 0 })}>
                                    <img src={`/icons/${item.icon}.svg`} />
                                    <div className="px-4 whitespace-nowrap">{item.title}</div>
                                </div>
                            })
                        }
                    </div>

                </div>
                <div className="relative lg:flex lg:w-1/3">
                    <div className="absolute h-full w-full lg:top-0 top-20">
                        <img className="h-[160px] w-[290px] lg:w-full lg:h-full" src={"/images/cardimg1.svg"} />
                    </div>
                    <div className="absolute top-32 lg:top-10 left-4 lg:left-14 h-full w-full">
                        <img className="lg:h-[500px] lg:w-[500px]" width={250} height={160} src={"/images/cardimg2.svg"} />
                    </div>
                    <div className="absolute">
                    </div>
                </div>
            </div>

        </div>

    )
}