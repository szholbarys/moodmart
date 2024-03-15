'use client'
import Image from "next/image";
import logo from "../../../public/moodmart.svg";
import { LogoSvg } from "../shared/LogoSvg";
import { WhatsAppIcon } from "../shared/icons/whatsappIcon";
import { useState, ChangeEvent } from "react";
import { InstIcon } from "../shared/icons/instIcon";
import { YouTubeIcon } from "../shared/icons/youtubeIcon";

const Footer: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Regular expression to validate phone number
        const phoneRegex = /^(?:|[\d]{11})$/;
        setIsValid(phoneRegex.test(value));
        setPhoneNumber(value);
    };
    return (
        <div className="bg-black py-10 px-20">
            <div className="flex justify-between">
                <div className="w-[15%]">
                    <LogoSvg color="white" className="mb-10"/>
                    <p className="text-16px text-white font-bold">нужна консультация?</p>
                    <p className="text-16px text-grey whitespace-normal mb-5">наши специалисты ответят на любой вопрос</p>
                    <div className="flex items-center">
                        <WhatsAppIcon size={16} color="white" className="mr-2"/>
                        <a className="text-grey a-white">WhatsApp</a>
                    </div>
                </div>
                <div className="flex flex-col text-18px">
                    <p className="text-white mb-5 text-20px text-bold">о нас</p>
                    <a className="mb-2 a-white text-grey">политика конфеденциальности</a>
                    <a className="mb-2 a-white text-grey">публичная оферта</a>
                    <a className="a-white text-grey">вакансии</a>
                </div>
                <div className="flex flex-col mb-5 text-18px">
                    <p className="text-white mb-5 text-20px text-bold">клиентам</p>
                    <a className="mb-2 a-white text-grey">доставка</a>
                    <a className="mb-2 a-white text-grey">возврат товара</a>
                    <a className="a-white text-grey">бонусная программа</a>
                </div>
                <div className="text-18px text-grey flex items-start">
                    <div className="block">  
                        <input
                            type="tel" 
                            placeholder="номер телефона"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            className="w-[17.4375rem] bg-transparent border-b border-grey outline-none text-grey pb-[18px] pt-2.5 focus: text-white"
                            />
                        {!isValid && <p className="text-red-500 text-16px w-fit">Номер телефона неправильный</p>}
                    </div>
                    <button className="ml-4 text-grey border border-grey px-3 py-3.5 hover:text-white hover:border-current transition duration-200 ease-in-out">подписаться</button>
                </div>
            </div>
            <div className="flex items-center justify-center mt-32">
                <hr className="w-full h-[0.05rem] bg-grey border-0"/>
                <div className="border border-grey rounded-full p-2 ml-10 mr-2 hover:border-white cursor-pointer transition duration-200 ease-in-out">
                    <InstIcon color="white" />
                </div>
                <div className="border border-grey rounded-full mr-10 p-[0.46rem] hover:border-white cursor-pointer transition duration-200 ease-in-out">
                    <YouTubeIcon color="white" />
                </div>
                <hr className="w-full h-[0.05rem] bg-grey border-0"/>
            </div>
            <div className="mt-12 text-16px font-regular text-grey flex justify-center">2024 © MoodMart</div>
        </div>
    )
}

export default Footer;