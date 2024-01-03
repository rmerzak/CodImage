'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import animation from '@/public/animation.json'
import Popup from '../CvUp/Popup'
import OutsideClickHandler from 'react-outside-click-handler'
function Footer() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
    };
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex items-center gap-10 py-16'>
            <Link className='text-sm text-gray-400 hover:text-gray-500' href='https://www.rmerzak.me'>rmerzak.me</Link>
            <Link href='' className='flex items-center text-sm  font-medium hover:text-slate-200 ease-in-out'>
                <div className='relative flex items-center justify-between'>
                <div className='flex items-center w-full h-full'>Made By</div>
                <Heart className=' w-4 h-4 text-red-500' />
                </div>
            </Link>
            <Link href='https://github.com/rmerzak/CodImage/tree/main' className='flex items-center text-sm font-medium hover:text-slate-200 ease-in-out'>
                Source Code Here &nbsp;&#129120;
            </Link>
            <div className='flex'>
                <Link href='https://www.linkedin.com/in/rmerzak/'>
                <Image src='/linkdeen.svg' alt='Vercel Logo' width={30} height={30} /></Link>
                <Link href='https://github.com/rmerzak'>
                <Image src='/github.svg' alt='Vercel Logo' width={30} height={30} /></Link>
                <button onClick={() => setIsOpen(true)}>
                <Image src='/portfolio.svg' alt='Vercel Logo' width={30} height={30} /></button>
            </div>
             {isOpen && 
                <Popup setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Footer
