import classNames from "classnames";

export default function SignUpNowBtn({ color }: { color: string }) {
    return (
        <button
            className={classNames(`text-[#${color}] font-medium py-4 px-8 
            border-2 border-[#${color}] rounded-lg`, { "text-white": color === "ffffff" })}>
            Sign up now
        </button>
    )
}