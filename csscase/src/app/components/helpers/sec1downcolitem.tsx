export default function Section1DownColItem({ item }:
    { item: { title: string, image: string, text: string, rect: string } }) {
    return (
        <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="relative">
                <img src={`/icons/${item.image}.svg`} />
                <img className="absolute top-0 right-0 translate-x-4"
                    src={`/icons/${item.rect}.svg`} />
            </div>

            <div className="font-medium text-xl text-[#0F172A]">
                {item.title}
            </div>
            <div className="text-center lg:text-left text-lg text-[#0F172A]">
                {item.text}
            </div>
        </div>
    )
}