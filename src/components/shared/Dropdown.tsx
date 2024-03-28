import React, { useState, useEffect } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { BotIcon } from './icons/botIcon';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

interface DropdownMenuProps {
  options: Option[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null); // Initialize with null to avoid initial placeholder
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        // If 'f' query parameter is not set, immediately set it to the value of the first option
        if (!searchParams.get('f') && options.length > 0) {
            const newParams = new URLSearchParams(searchParams);
            newParams.set('f', options[0].value);
            const url = `${pathname}?${newParams.toString()}`;
            router.push(url);
        }
    }, []); // Only run on component mount

    useEffect(() => {
        // Get the 'f' query parameter from the search params
        const f = searchParams.get('f');
        // Find the option whose value matches the 'f' parameter
        const selected = options.find(option => option.value === f);
        // If a matching option is found, set it as the selected option
        if (selected) {
            setSelectedOption(selected);
        }
    }, [searchParams]); // Re-run effect when searchParams change

    const handleDropdownChange = (selected: Option) => {
        setSelectedOption(selected);
        // Construct new query object with the existing query parameters and the new parameter
        const newParams = new URLSearchParams(searchParams);
        newParams.set('f', selected.value);
        const url = `${pathname}?${newParams.toString()}`;
        router.push(url);
    };

    return (
      <Dropdown
        className="w-fit cursor-pointer"
        arrowClosed={<BotIcon className="arrow-open" color="var(--black)" />}
        arrowOpen={<BotIcon className="arrow-closed rotate-180" color="var(--black)" />}
        options={options}
        placeholderClassName='primary-hover'
        value={selectedOption?.value} // Set the selected option
        controlClassName="flex pl-4"
        menuClassName="absolute z-50 bg-white p-4 shadow-xl"
        onChange={handleDropdownChange}
      />
    );
};

export default DropdownMenu;
