'use client'

import { ThemeSelectorProps } from '@/interfaces'
import { themes } from '@/utils/utilities'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
    const [open, setOpen] = useState(false)
    const taggleDropdown = () => {
        setOpen(!open)
    }
    const handleThemeChange = (theme: string) => {
        setTheme(theme)
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div className='theme-selector' onClick={taggleDropdown}>
            <p className='py-[5px] text-sm font-medium'>Code Colors</p>
            <div className='dropdown-title capitalize w-[120px]'>
                {theme}
                <ChevronDown />
            </div>
            {
                open &&
                <div className='dropdown-menu w-[120px] top-[94px]'>
                    {themes.map((theme, i) => {
                        return (
                            <button key={i} onClick={ () => handleThemeChange(theme)} className='capitalize text-left text-[14px]'>{theme}</button>
                        )
                    })}
                </div>
            }
        </div>
        </OutsideClickHandler>
    )
}

export default ThemeSelector
