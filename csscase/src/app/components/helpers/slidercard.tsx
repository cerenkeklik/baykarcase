export default function SliderCard({ item }: {
    item: {
        icon: string, iconowner: string, text: string,
        image: string, name: string, title: string
    }
}) {
    return (
        <div className="flex flex-col gap-4 p-6 shadow-lg bg-white rounded-2xl w-[320px] lg:w-[384px] h-full border-[1px] border-[#E2E8F0]">
            <div className="flex py-4 gap-2">
                <img src={`/icons/${item.icon}.svg`} />
                <div className="text-2xl font-bold text-[#475569]">{item.iconowner}</div>
            </div>
            <div className="text-base lg:text-2xl lg:leading-[38.4px] font-normal">{item.text}</div>
            <div className="flex pt-4 gap-4">
                <img src={`/images/${item.image}.svg`} />
                <div>
                    <div className="text-lg font-base">{item.name}</div>
                    <div className="text-base font-base text-[#475569]">
                        {item.title}
                    </div>
                </div>
            </div>
        </div>
    )
}