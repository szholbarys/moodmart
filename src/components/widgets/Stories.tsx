import { Story } from '@/core/interfaces/story.interface';
import React from 'react';
import Image from 'next/image';

interface StoriesProps {
    stories: Story[],
}

export const Stories:React.FC<StoriesProps> = ( { stories }) => {
    return(
        <>
            {stories.map((story, index) => (
                <div key={index}>
                    <Image 
                        src={story.image}
                        width={100}
                        height={100}
                        alt={story.text}
                    />
                    <p>{story.text}</p>
                </div>
            ))}
        </>
    )
}