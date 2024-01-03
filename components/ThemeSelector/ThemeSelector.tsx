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
            <div className='dropdown-title capitalize w-[125px]'>
                {theme}
                <ChevronDown />
            </div>
            {
                open &&
                <div className='dropdown-menu scrollbar-thin scrollbar-track-black scrollbar-thumb-rose-500 w-[125px] top-[94px] max-h-[200px] overflow-y-auto overflow-x-hidden'>
                    {themes.map((theme, i) => {
                        return (
                            <button key={i} onClick={ () => handleThemeChange(theme.name)} className='capitalize text-left text-[14px]'>{theme.value}</button>
                        )
                    })}
                </div>
            }
        </div>
        </OutsideClickHandler>
    )
}

export default ThemeSelector
