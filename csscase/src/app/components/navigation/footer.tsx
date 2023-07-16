export default function Footer() {

    let array = [
        {
            title: "Product",
            subtitles: ["Pricing", "Overview", "Browse", "Accessibility", "Five"]
        },
        {
            title: "Solutions",
            subtitles: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"]
        },
        {
            title: "Support",
            subtitles: ["Contact Us", "Developers", "Documentation", "Integrations", "Reports"]
        }
    ]

    let icons = ["youtube", "facebook", "twitter", "instagram", "linkedin"]

    let footerlinks = [
        {
            title: "Terms",
            icon: null
        },
        {
            title: "Privacy",
            icon: null
        },
        {
            title: "Contact",
            icon: null
        },
        {
            title: "EN",
            icon: "world"
        }
    ]

    return (
        <div className="bg-[#0F172A] text-[#E2E8F0] flex flex-col items-center lg:px-20">
            <div className="w-11/12 border-b-[1px] border-[#E2E8F0] py-12">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {
                        array.map((item: { title: string, subtitles: string[] }, i: number) => {
                            return <div key={i} className="flex flex-col items-center lg:gap-0 lg:items-start lg:w-1/4">
                                <div className="text-base font-medium">{item.title}</div>
                                {item.subtitles.map((sub: string, i: number) => {
                                    return <div key={i} className="py-4 text-base">{sub}</div>
                                })}
                            </div>
                        })
                    }

                    <div className="flex flex-col items-center lg:justify-around">
                        <div className="flex flex-col gap-2">
                            <div className="text-center text-base font-medium lg:py-3 lg:text-left"> Get the App</div>
                            <img src="/images/googleplay.svg" width={120} height={40} />
                            <img src="/images/appstore.svg" width={120} height={40} />
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <div className="text-base pt-12 pb-3">Follow Us</div>
                            <div className="flex gap-4">
                                {
                                    icons.map((item: string, i: number) => {
                                        return <img key={i} src={`/icons/${item}.svg`} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col gap-6 py-12 items-center">
                <div className="text-base">Collers @ 2023. All rights reserved.</div>
                <div className="flex gap-8">
                    {
                        footerlinks.map((item: { icon: string | null, title: string }, i: number) => {
                            return <div className="flex gap-2">
                                {item.icon && <img src={`/icons/${item.icon}.svg`} />}
                                <div className="text-base">{item.title}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}