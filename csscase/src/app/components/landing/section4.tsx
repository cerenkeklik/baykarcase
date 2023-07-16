import SliderCard from "../helpers/slidercard"

export default function Section4() {

    let SliderItems = [
        {
            icon: "slidericon1",
            iconowner: "kontrastr",
            text: `Amet morbi enim sodales quis dui, in habitant pharetra. 
            Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.`,
            image: "sliderimage1",
            name: "Ralph Edwards",
            title: "Product Designer"
        },
        {
            icon: "slidericon2",
            iconowner: "Zoomerr",
            text: `Non risus viverra enim, quis. 
            Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.`,
            image: "sliderimage2",
            name: "Hellen Jummy",
            title: "Team Lead"
        },
        {
            icon: "slidericon3",
            iconowner: "SHELLS",
            text: `Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. 
            Sit purus venenatis velit semper lectus sed ornare quam nulla.`,
            image: "sliderimage3",
            name: "Hellena John",
            title: "Co-founder"
        },
        {
            icon: "slidericon4",
            iconowner: "ArtVenue",
            text: `A eget sed posuere dui risus habitasse mauris. 
            Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.`,
            image: "sliderimage4",
            name: "David Oshodi",
            title: "Manager"
        },
        {
            icon: "slidericon5",
            iconowner: "Waves",
            text: `Magna egestas aliquet ut integer non. Sed diam enim nibh sit. 
            Aliquam laoreet aenean metus nibh eu scelerisque.`,
            image: "sliderimage5",
            name: "Charolette Hanlin",
            title: "CEO"
        }
    ]

    return (
        <div className="flex flex-col py-12 px-4 gap-8 bg-[#fffdf3] h-fit lg:items-center">
            <div className="flex flex-row lg:justify-between items-center lg:w-[1280px]">
                <div className="text-[32px] text-center 
                font-bold lg:text-[56px]">
                Because they love us
            </div>
            <div className="w-fit h-fit lg:flex flex-row gap-6 hidden ">
                    <div className="rounded-full border-2 border-[#78350f] flex w-12 h-12 justify-center items-center">
                        <img src="/icons/leftarrow.svg" width={24} height={24} />
                    </div>
                    <div className="rounded-full border-2 border-[#78350F] flex w-12 h-12 justify-center items-center">
                        <img src="/icons/rightarrow.svg" width={24} height={24} />
                    </div>
                </div>
            </div>
            <div className="relative bg-[#FDE68A] w-full h-[300px] lg:h-[400px] lg:flex lg:justify-center">
                <div className="absolute top-8 w-11/12 grid grid-flow-col gap-8 justify-start overflow-x-auto scroll-smooth z-20">
                    {
                        SliderItems.map((item: {
                            icon: string, iconowner: string, text: string,
                            image: string, name: string, title: string
                        }, i: number) => {
                            return <div className="w-full bg-white rounded-[20px]" key={i}>
                                <SliderCard item={item} />
                            </div>
                        })
                    }
                </div>
            </div>



        </div>
    )
}