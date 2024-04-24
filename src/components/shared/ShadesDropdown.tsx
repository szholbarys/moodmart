'use client'
import { FC, useState } from "react";
import { BotIcon } from "./icons/botIcon";
import { Shade } from "@/core/type/product.type";

interface ShadesDropdownProps {
    shades: Shade[],
    className?: string,
}

type ShadeOption = {
    label: string;
    value: string;
    data: string; // Add data property for hex color
}

const ShadesDropdown: FC<ShadesDropdownProps> = ({ shades, className }) => {
    const shadesAsObjects: ShadeOption[] = shades.map(shade => ({
        label: `${shade.name}`, // Add hex color before the label
        value: shade.name,
        data: shade.hexColor,
    }));
    
    const [selectedShade, setSelectedShade] = useState<ShadeOption | null>(shadesAsObjects[0]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleSelect = (shade: ShadeOption) => {
        setSelectedShade(shade);
        setIsOpen(false)
    }

    return (
        <div className="w-80 relative flex flex-col items-center">
            <div className="w-full mt-7 flex items-center justify-between cursor-pointer border-b-[1px]" onClick={toggleDropdown}>
                <div className="flex items-center">
                    <div className={`rounded-full w-4 h-4 mr-2`} style={{backgroundColor: selectedShade?.data}}></div>
                    <p className="text-[14px]">{selectedShade?.label}</p>
                </div>
                <BotIcon 
                    className={`transition-transform duration-300 ml-2 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    color="var(--black)" 
                    strokeWidth={2} 
                    size={18}
                    />
            </div>
            <div className={`absolute w-[110%] top-[50px] bg-white shadow-xl transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                {shadesAsObjects.map((shade, index) => (
                    <div key={index} className={`flex items-center cursor-pointer px-4 ${index === shadesAsObjects.length - 1 ? 'pb-4' : ''} ${index === 0 ? 'pt-4' : ''}`} onClick={() => {handleSelect(shade)}}>
                        <div className={`rounded-full w-4 h-4 mr-2 `} style={{backgroundColor: shade.data}}></div>
                        <p className={`text-[14px] primary-hover ${selectedShade?.value === shade.value ? 'text-primary' : ''}`}>{shade.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShadesDropdown;
