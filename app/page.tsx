'use client'
import CodeEditor from '@/components/CodeEditor/CodeEditor'
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector'
import { languages, themes } from '@/utils/utilities'
import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name)
  const [activeIcon, setActiveIcon] = useState<string>(languages[8].icons)
  const [theme, setTheme] = useState(themes[0])
  return (
    <main className='h-[100vh] flex flex-col items-center justify-between'>
      <header className='flex gap-6 mt-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3c3c3c] shadow-md'>
        <LanguageSelector language={language} setLanguage={setLanguage} setActiveIcon={setActiveIcon}/>
        <ThemeSelector theme={theme} setTheme={setTheme}/>
      </header>
      <div className='code-editor-ref mt-[14rem]'>
        <CodeEditor language={language} icon={activeIcon} theme={theme}/>
      </div>
    </main>
  )
}
