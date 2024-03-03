import React from "react";
import { StarIcon } from "./icons/starIcon";

interface StarRatingProps {
    rating: number,
}

const calculateStarFillPercentages = (rating: number): number[] => {
    const fullStars = Math.floor(rating);
    const lastStarPercentage = Math.round((rating - fullStars) * 100);

    const fillPercentages = Array.from({ length: 5 }, (_, index) => {
        if (index < fullStars) {
            return 100;
        } else if (index === fullStars) {
            return lastStarPercentage;
        } else {
            return 0;
        }
    });

    return fillPercentages;
};


export const StarRating:React.FC<StarRatingProps> = ( { rating } ) => {
    const fillPercentages = calculateStarFillPercentages(rating);
    return (
        <div className="flex space-x-0.5">
            {fillPercentages.map((percentage, index) => (
                <StarIcon key={index} percentage={percentage} />
            ))}
        </div>
    )
}