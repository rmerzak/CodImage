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
                <span className='pr-2'>Made By</span>
                {/* <Heart className='w-4 h-4 text-red-500' /> */}
                <div className=' w-[30px] h-[30px] flex items-center justify-center'>
                    <Lottie className='w-full h-full'
                        animationData={animation}
                        height={200}
                        width={200}
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
