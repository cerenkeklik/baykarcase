export default function Section5Down() {
    return (
        <div className="bg-[#78350F] h-screen w-screen flex justify-start lg:justify-center lg:items-center lg:w-full overflow-hidden">
        <div className="relative flex flex-col items-center lg:justify-center">
          <img src="/images/chart.svg" className="opacity-50 max-w-max" />
          <img src="/images/ellipses.svg" className="absolute top-0 left-0 lg:left-auto lg:top-auto lg:flex max-w-max" />
          <div className="absolute lg:top-0 lg:left-0 top-20 left-10">
            <img src="/images/sneakers2.svg" />
            <div className="text-sm bg-[#DFE5ED] top-0 ">Emma Simpson collected one pair of Cool Shoes.</div>
          </div>
          <div className="absolute flex flex-col text-center text-[#FFFBEB]">
            <div className="lg:text-[96px] lg:font-extrabold">11,658,467</div>
            <div className="lg:text-[56px] lg:font-extrabold">Shoes Selected</div>
          </div>
        </div>
      </div>
    )
}