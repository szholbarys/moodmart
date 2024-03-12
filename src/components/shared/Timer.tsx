'use client'
import React, { useEffect, useState } from 'react';
import { ClockIcon } from './icons/clockIcon';

interface TimerProps {
    seconds: number;
    className?: string;
}

const Timer: React.FC<TimerProps> = ({ seconds, className }) => {
    const [time, setTime] = useState<{ days: number; hours: number; minutes: number }>({
        days: 0,
        hours: 0,
        minutes: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                const days = Math.floor(seconds / (3600 * 24));
                const hours = Math.floor((seconds % (3600 * 24)) / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);

                setTime({ days, hours, minutes });

                seconds -= 1;
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className={`flex items-center bg-white w-fit px-3 py-2 ${className}`}>
            <ClockIcon color='var(--black)'/>
            <div className='flex ml-1 items-center'>
                <div className='flex flex-col items-center mr-[3px]'>
                    <p className='font-semi-bold'>{time.days}</p>
                    <p className="text-10px text-grey font-meduim">дней</p>
                </div>
                :
                <div className='flex flex-col items-center mx-[3px]'>
                    <p className='font-semi-bold'>{time.hours}</p>
                    <p className="text-10px text-grey font-meduim">часов</p>
                </div>
                :
                <div className='flex flex-col items-center ml-[3px]'>
                    <p className='font-semi-bold'>{time.minutes}</p>
                    <p className="text-10px text-grey font-meduim">минут</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;