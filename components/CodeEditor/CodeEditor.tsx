'use client'

import React, { use, useEffect, useState } from "react"
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";
// languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";

// themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";



import { CodeEditorProps } from "@/interfaces";
import { initialCode } from "@/utils/utilities";
function CodeEditor({ language, theme, icon, background, currentPading }: CodeEditorProps) {
    const [width, setWidth] = useState<number>(1000)
    const [height, setHeight] = useState<number>(500)
    const [title, setTitle] = useState<string>('Untitled-1')
    const [code, setCode] = useState<string>(initialCode)

    // @ts-ignore
    const handleResize = (evt, direction, ref, pos) => {
        const newHeight = ref.style.height;
        setHeight(parseInt(newHeight,10))
    }
    const updateSize = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])
    return (
        <Resizable className=" resize-container relative" minHeight={466} minWidth={510}  maxWidth={1000} defaultSize={{width:width,height:height || 500}} onResize={handleResize} style={{background:background}}>
        <div className="code-block" style={{padding:currentPading}} >
            <div className="handle handle-top absolute left-1/2 top-[-4px] w-2 translate-x-[-50%] h-2 rounded-full bg-slate-300 hover:bg-slate-50 "></div>
            <div className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 translate-x-[-50%] h-2 rounded-full bg-slate-300 hover:bg-slate-50 "></div>
            <div className="handle handle-left absolute left-0 top-1/2 w-2 translate-x-[-50%] h-2 rounded-full bg-slate-300 hover:bg-slate-50 "></div>
            <div className="handle handle-right absolute right-[-8px] top-1/2 w-2 translate-x-[-50%] h-2 rounded-full bg-slate-300 hover:bg-slate-50 "></div>
            <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80">
                <div className="dots flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
                </div>
                <div className="input-control w-full">
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full text-[hsla(0,0%,100%,.6)] leading-9 outline-none font-medium text-center bg-transparent"/>
                </div>
                <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30  rounded-sm">
                    <img src={icon} className="w-[20px]" alt="icon" />
                </div>
            </div>
            <AceEditor
                name="uniqueId"
                fontSize={16}
                mode={language.toLocaleLowerCase()}
                theme={theme}
                showPrintMargin={false}
                showGutter={false}
                wrapEnabled={true}
                highlightActiveLine={false}
                value={code}
                editorProps={{ $blockScrolling: true }}
                // setOptions={{
                //     enableBasicAutocompletion: true,
                //     enableLiveAutocompletion: true,
                //     enableSnippets: false,
                //     showLineNumbers: true,
                //     tabSize: 2,
                // }}
                height={`calc(${height}px - ${currentPading} - ${currentPading} - 52px)`}
                className="ace-editor-container"
            />
        </div>
        </Resizable>
    )
}

export default CodeEditor;