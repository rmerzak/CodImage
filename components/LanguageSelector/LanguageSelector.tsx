'use client'

import React, { useState } from 'react'
import { LanguageSelectorProps } from '@/interfaces'
import { ChevronDown } from 'lucide-react'
import { languages } from '@/utils/utilities'
function LanguageSelector({ language, setLanguage, setActiveIcon }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false)
  const taggleDropdown = () => {
    setOpen(!open)
  }
  const handleLanguageChange = (language: string) => {
    setLanguage(language)
    const newActiveIcon = languages.find((lang) => lang.name === language)?.icons
    setActiveIcon(newActiveIcon || '')
    setOpen(false)
  }
  return (
    <div onClick={taggleDropdown}>
      <p className='py-[5px] text-sm font-medium'>Language</p>
      <div className='dropdown-title capitalize w-[120px]'>
        {language}
        <ChevronDown />
      </div>
      {open &&
        <div className='dropdown-menu w-[120px] top-[94px]'>{languages.map((lang, i) => {
          return (
            <div key={i}>
              <button className='dropdown-item  text-left'
                onClick={() => handleLanguageChange(lang.name)}
              >
                {lang.name}
              </button>
            </div>
          )
        })}</div>}
    </div>
  )
}

export default LanguageSelector
