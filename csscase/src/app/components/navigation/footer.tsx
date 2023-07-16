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

    return (
        <div className="">
            <div>
                {
                    array.map((item: { title: string, subtitles: string[] }, i: number) => {
                        return <div>
                            <div>{item.title}</div>
                            {item.subtitles.map((sub: string, i: number) => {
                                return <div>{sub}</div>
                            })}
                        </div>
                    })
                }
             
                <div>4</div>
            </div>
            <div>alt</div>
        </div>
    )
}