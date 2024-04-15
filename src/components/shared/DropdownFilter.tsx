import { ReactNode, useState } from "react";
import { BotIcon } from "./icons/botIcon";

interface DropdownFilterProps {
    children: ReactNode;
    initOpen: boolean;
    name: string;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ initOpen, name, children }) => {
    const [isOpen, setIsOpen] = useState(initOpen);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <>
            <div className="flex cursor-pointer items-center" onClick={toggleDropdown}>
                <BotIcon 
                    className={`transition-transform duration-300 mr-2 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    color="var(--black)" 
                    strokeWidth={2} 
                    size={18}
                />
                <h3 className="text-22px">{name}</h3>
            </div>
            <div className={`transition-all duration-300 ease-out overflow-hidden ${isOpen ? 'scale-y-100' : 'scale-y-0'} origin-top`}>
                {children}
            </div>
        </>
    );
};

export default DropdownFilter;
