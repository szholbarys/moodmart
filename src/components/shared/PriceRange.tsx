import { FC, useState } from 'react';

const PriceRange: FC = () => {
  const [minPrice, setMinPrice] = useState(3000);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setMinPrice(Number(value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setMaxPrice(Number(value));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-2">
        <div className="flex flex-col items-center">
          <label className="text-sm text-left">от</label>
          <input
            type="text"
            value={`${minPrice} ₸`}
            onChange={handleMinPriceChange}
            className="border rounded w-40 h-10 text-center"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-sm text-left">до</label>
          <input
            type="text"
            value={`${maxPrice} ₸`}
            onChange={handleMaxPriceChange}
            className="border rounded w-40 h-10 text-center"
          />
        </div>
      </div>
      <div className="w-full px-4">
        <input
          type="range"
          min="3000"
          max="1000000"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full mb-2"
        />
      </div>
    </div>
  );
};

export default PriceRange;
