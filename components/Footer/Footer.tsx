'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import Lottie from 'lottie-react'
import animation from '@/public/animation.json'
function Footer() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
    };
    return (
        <div className='flex items-center gap-10 py-16'>
            <Link className='text-sm text-gray-400 hover:text-gray-500' href='https://www.rmerzak.me'>rmerzak.me</Link>
            <Link href='' className='flex items-center text-sm  font-medium hover:text-slate-200 ease-in-out'>
                <div className='relative flex items-center justify-between'>
                <div className='flex items-center justify-end w-full h-full'>Made By</div>
                {/* <Heart className='w-4 h-4 text-red-500' /> */}
                    <Lottie
                        animationData={animation}
                        className='flex float-end w-[100px] h-[100px] '
                    />
                </div>
            </Link>
            <Link href='' className='flex items-center text-sm font-medium hover:text-slate-200 ease-in-out'>
                Source Code Here &nbsp;&#129120;
            </Link>
        </div>
    )
}

export default Footer
