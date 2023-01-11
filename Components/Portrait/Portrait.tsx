import React from 'react';
import Image from 'next/image';
import PortraitFrame from '../PortraitFrame/PortraitFrame';

interface PortraitProps {
    imageWidth: number;
    imageHeight: number;
}

const Portrait = (props: PortraitProps) => {
    return (
        <div className='relative inline-block'>
            <Image
                src='/Akshay.jpg'
                alt='Portrait of Akshay'
                width={props.imageWidth}
                height={props.imageHeight}
                className='block w-full h-auto rounded-sm text-center'
            />
            {/* <PortraitFrame /> */}
        </div>
    );
};

export default Portrait;
