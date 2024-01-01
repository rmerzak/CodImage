'use client'
import BackgroudSelector from '@/components/BackgroudSelector/BackgroudSelector'
import CodeEditor from '@/components/CodeEditor/CodeEditor'
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import PaddingSelector from '@/components/PadingSelector/PaddingSelector'
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector'
import { backgrounds, languages, themes } from '@/utils/utilities'
import { useState } from 'react'
export default  function Home() {
  const [language, setLanguage] = useState(languages[0].name)
  const [activeIcon, setActiveIcon] = useState<string>(languages[0].icons)
  const [theme, setTheme] = useState(themes[0])
  const [background, setBackground] = useState<string>(backgrounds[0])
  const [padding, setPadding] = useState<string[]>(['1rem', '2rem', '3rem', '4rem'])
  const [currentPading, setCurrentPading] = useState<string>(padding[3])

  return (
    <main className='h-[100vh] flex flex-col items-center justify-between'>
      <header className='flex gap-6 mt-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3c3c3c] shadow-md'>
        <LanguageSelector language={language} setLanguage={setLanguage} setActiveIcon={setActiveIcon}/>
        <ThemeSelector theme={theme} setTheme={setTheme}/>
        <BackgroudSelector background={background} setBackground={setBackground}/>
        <PaddingSelector padding={padding} currentPading={currentPading} setCurrentPading={setCurrentPading}/>
      </header>
      <div className='code-editor-ref mt-[14rem]'>
        <CodeEditor language={language} icon={activeIcon} theme={theme} background={background} currentPading={currentPading} />
      </div>
    </main>
  )
}
