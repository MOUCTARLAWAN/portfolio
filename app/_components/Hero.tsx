/* eslint-disable @next/next/no-img-element  */

import Image from 'next/image';

import { Section } from "./Section";
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { YoutubeIcon } from './icons/YoutubeIcon';
import Link from 'next/link';

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent p-1 text-primary rounded-sm",className)} {...props} />
}

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-3" >
            <div className="flex-[2] flex flex-col gap-2">
                <h2 className='font-caption text-5xl text-primary'>Mouctar LAWAN</h2>
                <h3 className='text-3xl font-caption'>Software developer and data Science</h3>
                <p className='text-base'>
                    Un peu d'histoire de ce que je fais 
                    j'adore creer des contenus 
                    <Link href="youtube.com">
                    <Code className='inline-flex items-center gap-1 '><YoutubeIcon size={25} className='inline '/> YouTube</Code>
                    </Link> 
                </p>
            </div>
            <div className="flex-1 m-auto ml-auto">
            
            <Image 
                src="/image/pp.jpg" 
                alt="mon-image" 
                width={100} 
                height={200} 
                className='max-md:w-56'
                style={{ borderRadius: '10px',
                            color:'currentcolor',
                           
                 }}
                />
            
                
            </div>
        </Section>
        
    )
}