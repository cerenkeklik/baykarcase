import Section1DownColItem from "../helpers/sec1downcolitem"

export default function Section1Down() {

    let items = [
        {
            image: "col1icon",
            rect: "col1rect",
            title: "Nibh viverra",
            text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        },
        {
            image: "col2icon",
            rect: "col2rect",
            title: "Cursus amet",
            text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        },
        {
            image: "col3icon",
            rect: "col3rect",
            title: "Ipsum fermentum",
            text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        }
    ]

    return (
        <div className="columns-3 flex flex-col px-4 py-12 lg:p-20 gap-8 lg:flex-row">
            {
                items.map((item: { image: string, title: string, text: string, rect:string }) => {
                    return <Section1DownColItem item={item} />
                })
            }
        </div>
    )
}


