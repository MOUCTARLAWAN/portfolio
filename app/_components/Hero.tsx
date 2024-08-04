/* eslint-disable @next/next/no-img-element  */

import Image from 'next/image';

import { Section } from "./Section";
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { YoutubeIcon } from './icons/YoutubeIcon';
import Link from 'next/link';
import { Code } from './Code';


export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-3" >
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className='font-caption text-5xl text-primary'>Mouctar LAWAN</h2>
                <h3 className='text-3xl font-caption'>Software developer and data Science</h3>
                <p className='text-base'>
                        Je suis un ingénieur informatien avec une expérience en tant que développeur de            
                        programmes informatiques. Mes compétences incluent le 
                        développement des <span className='font-caption text-primary '>applications web et mobile</span>, les modeles
                        de machine learning et l'administration des systèmes d'information. Je suis passionné par 
                        la technologie et je suis toujours à la recherche de nouvelles 
                        opportunités pour mettre en pratique mes compétences et 
                        contribuer au développement de solutions innovantes dans le 
                        domaine de l'informatique.
                    <Link href="youtube.com" >
                        <Code className='inline-flex items-center gap-1 '>
                            <YoutubeIcon size={20} className='inline-flex'/>  
                            YouTube
                        </Code>
                    </Link> 
                </p>
            </div>
            <div className="flex m-auto ml-auto">
            
            <Image 
                    src="/image/pp.jpg" 
                    alt="mon-image" 
                    width={100} 
                    height={200} 
                    className='max-md:w-56 rounded-lg'
                />
            </div>
        </Section>
    )
}