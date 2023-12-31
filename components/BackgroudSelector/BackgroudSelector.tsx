import { BackgroundSelectorProps } from '@/interfaces'
import { backgrounds } from '@/utils/utilities'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
function BackgroudSelector({ background, setBackground }: BackgroundSelectorProps) {
    const [open, setOpen] = React.useState(false)
    const toggleDropdown = () => setOpen(!open)
    const handleBackgroundChange = (background: string) => {
        setBackground(background)
    }
    return (
        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div className='bg-selector relative' onClick={toggleDropdown}>
            <p className='py-[5px] text-sm font-medium'>Theme Selector</p>
            <div className='dropdown-title capitalize w-[62px]'>
                <div className='rounded-full w-[20px] h-[20px]'
                    style={{ background: background }}
                >

                </div>
                <ChevronDown />
            </div>
            {
                open &&
                <div className='dropdown-menu w-[62px] top-[74px] flex flex-col gap-2'>
                    {backgrounds.map((background, i) => {
                        return (
                            <div key={i} onClick={() => handleBackgroundChange(background)} className='rounded-full w-[20px] h-[20px]' style={{background:background}}></div>
                        )
                    })}
                </div>
            }
        </div>
        </OutsideClickHandler>
    )
}

export default BackgroudSelector
