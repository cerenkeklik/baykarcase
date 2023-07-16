import Section5Down from "./section5down";
import Section5Up from "./section5up";

export default function Section5(){
    return(
        <div className="flex flex-col ">
            <Section5Up />
            <Section5Down />
        </div>
    )
}