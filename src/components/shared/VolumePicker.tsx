'use client'
import { Product } from "@/core/type/product.type";
import { FC, useState } from "react";

interface VolumePickerProps {
    product: Product;
}

const VolumePicker: FC<VolumePickerProps> = ({ product }) => {
    const [selectedVolume, setSelectedVolume] = useState<number | null>(product.volumes?.[0] ?? null);

    const handleVolumeChange = (volume: number) => {
        setSelectedVolume(volume);
    };
    
    return (
        <div className="mt-[31px] text-[14px]">
            {product.volumes && (
                <>
                    <p className="mb-4">ОБЪЕМ / МЛ</p>
                    <div className="flex">
                        {product.volumes.map((volume, index) => (
                            <label key={index} className="block mb-2">
                                <input
                                    type="radio"
                                    name="volume"
                                    value={volume}
                                    checked={selectedVolume === volume}
                                    onChange={() => handleVolumeChange(volume)}
                                    className="hidden"
                                />
                                <span className={`mr-2 inline-block border-2 ${
                                    selectedVolume === volume ? 'border-black' : 'border-light_grey'
                                } px-[10px] py-[9px] cursor-pointer`}>
                                    {volume}
                                </span>
                            </label>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default VolumePicker;