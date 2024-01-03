'use client'
import BackgroudSelector from '@/components/BackgroudSelector/BackgroudSelector'
import CodeEditor from '@/components/CodeEditor/CodeEditor'
import Footer from '@/components/Footer/Footer'
import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import PaddingSelector from '@/components/PadingSelector/PaddingSelector'
import ThemeSelector from '@/components/ThemeSelector/ThemeSelector'
import { backgrounds, initialCode, languages, themes } from '@/utils/utilities'
import { Download } from 'lucide-react'
import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import ImageToText from '@/components/ImageToText/ImageToText'

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name)
  const [activeIcon, setActiveIcon] = useState<string>(languages[0].icons)
  const [theme, setTheme] = useState(themes[0])
  const [background, setBackground] = useState<string>(backgrounds[0])
  const [padding, setPadding] = useState<string[]>(['1rem', '2rem', '3rem', '4rem'])
  const [currentPading, setCurrentPading] = useState<string>(padding[3])
  const [code, setCode] = useState<string>(initialCode)
  const editorRef = useRef(null)
  const exportPng = async () => {
    const editorElement = editorRef.current
    if (editorElement) {
      // hide element
      const handleElems = document.querySelectorAll('.handle') as any;
      handleElems.forEach((elem:any) => {
        elem.style.display = 'none';
      });
      const handlecursorElems = document.querySelector('.ace_cursor') as any;
      handlecursorElems.style.display = 'none';
      const canvas = await html2canvas(editorElement)
      const img = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      const link = document.createElement('a')
      link.download = 'code.png'
      link.href = img
      link.click()
      // show element
      handleElems.forEach((elem:any) => {
        elem.style.display = 'block';
      });
      handlecursorElems.style.display = 'block';
    }
  }
  return (
    <main className='h-[100vh] flex flex-col items-center justify-between'>
      <header className='flex gap-6 mt-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border border-[#3c3c3c] shadow-md'>
        <LanguageSelector language={language} setLanguage={setLanguage} setActiveIcon={setActiveIcon} />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroudSelector background={background} setBackground={setBackground} />
        <PaddingSelector padding={padding} currentPading={currentPading} setCurrentPading={setCurrentPading} />
        <div className="export-btn self-center ml-auto">
          <button onClick={exportPng} className='flex items-center gap-2 py-2 px-3 rounded-md bg-blue-400 text-sm text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300'>
            Export PNG
            <Download />
          </button>
        </div>
        <ImageToText setCode={setCode}/>
      </header>
      <div className='code-editor-ref mt-[14rem]' ref={editorRef}>
        <CodeEditor language={language} icon={activeIcon} theme={theme} background={background} currentPading={currentPading} code={code} />
      </div>
      
    </main>
  )
}
