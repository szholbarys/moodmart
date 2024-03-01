import { Story } from '@/core/interfaces/story.interface';
import React from 'react';
import Image from 'next/image';

interface StoriesProps {
    stories: Story[],
}

export const Stories:React.FC<StoriesProps> = ( { stories }) => {
    return(
        <div className='flex justify-center mt-20'>
            {stories.map((story, index) => (
                <div key={index} className='flex flex-col items-center mx-4'>
                    <Image 
                        src={story.image}
                        width={100}
                        height={100}
                        alt={story.text}
                        className='rounded-full border-solid border-primary border-2 inset'
                    />
                    <p className='mt-4'>{story.text}</p>
                </div>
            ))}
        </div>
    )
}