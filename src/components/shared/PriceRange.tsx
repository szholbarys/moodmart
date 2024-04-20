import { FC, useState } from "react";

const PriceRange: FC = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);
    return (
        <div>
            <div>
                <label>
                    от
                    <input
                        type="number" 
                    />
                </label>
            </div>
        </div>
    )
}

export default PriceRange