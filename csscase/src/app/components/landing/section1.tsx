import Section1Down from "./section1down";
import Section1Up from "./section1up";

export default function Section1() {
    return (
        <div className="w-100 bg-gradient-to-b from-[#fffbeb]">
            <Section1Up />
            <Section1Down />
        </div>
    )
}