'use client'
import React, { useEffect, useState, useRef } from 'react';
import { ClockIcon } from './icons/clockIcon';

interface TimerProps {
    seconds: number;
    className?: string;
}

const Timer: React.FC<TimerProps> = ({ seconds, className }) => {
    const [time, setTime] = useState<{ days: string; hours: string; minutes: string }>({
        days: '00',
        hours: '00',
        minutes: '00'
    });
    
    const secondsRef = useRef(seconds);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (secondsRef.current > 0) {
            interval = setInterval(() => {
                const days = Math.floor(secondsRef.current / (3600 * 24)).toString().padStart(2, '0');
                const hours = Math.floor((secondsRef.current % (3600 * 24)) / 3600).toString().padStart(2, '0');
                const minutes = Math.floor((secondsRef.current % 3600) / 60).toString().padStart(2, '0');

                setTime({ days, hours, minutes });

                secondsRef.current -= 1;
            }, 1000);
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`flex items-center bg-white w-fit px-3 py-2 ${className}`}>
            <ClockIcon color='var(--black)'/>
            <div className='flex ml-1 items-center'>
                <div className='flex flex-col items-center mr-[3px]'>
                    <p className='font-semi-bold'>{time.days}</p>
                    <p className="text-10px text-grey font-medium">дней</p>
                </div>
                :
                <div className='flex flex-col items-center mx-[3px]'>
                    <p className='font-semi-bold'>{time.hours}</p>
                    <p className="text-10px text-grey font-medium">часов</p>
                </div>
                :
                <div className='flex flex-col items-center ml-[3px]'>
                    <p className='font-semi-bold'>{time.minutes}</p>
                    <p className="text-10px text-grey font-medium">минут</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
