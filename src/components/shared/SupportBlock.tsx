import router from "next/router"
import { LogoSvg } from "./LogoSvg"
import { WhatsAppIcon } from "./icons/whatsappIcon"
import { FC } from "react"

interface SupportBlockProps {
    className?: string,
    color?: string,
    headingClassName?: string,
}

const SupportBlock: FC<SupportBlockProps> = ({className, color = 'white', headingClassName = 'text-16px'}) => {
    return (
        <div className={`${className}`}>
            <p className={`${headingClassName} text-${color} font-bold`}>нужна консультация?</p>
            <p className={`text-18px text-grey whitespace-normal mb-5`}>наши специалисты ответят на любой вопрос</p>
            <div className="flex items-center">
                <WhatsAppIcon size={16} color={color} className="mr-2"/>
                <a className={`text-grey a-${color}`}>WhatsApp</a>
            </div>
        </div>
    )
}

export default SupportBlock;