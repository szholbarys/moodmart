import { IconType } from "@/core/type/icon.type"

export const BotIcon: React.FC<IconType> = ({ size = 24, color, className, onClick }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5156 9.49463L12.5156 15.4946L6.51562 9.49463" stroke={color} strokeLinecap="square"/>
        </svg>
    )
}