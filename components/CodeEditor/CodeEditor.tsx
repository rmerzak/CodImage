'use client'

import React from "react"
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

import { CodeEditorProps } from "@/interfaces";
function CodeEditor({ language, theme, icon, background, currentPading }: CodeEditorProps) {
    return (
        <Resizable className="border" minHeight={466} maxWidth={1000} minWidth={510}>
        <div>
            <AceEditor
                name="uniqueId"
                fontSize={16}
                mode={language.toLocaleLowerCase()}
                theme="monokai"
                showPrintMargin={false}
                showGutter={false}
                wrapEnabled={true}
                highlightActiveLine={false}
                value={`function onLoad(editor) {
                    console.log("i've loaded");
                }`}
                editorProps={{ $blockScrolling: true }}
                // setOptions={{
                //     enableBasicAutocompletion: true,
                //     enableLiveAutocompletion: true,
                //     enableSnippets: false,
                //     showLineNumbers: true,
                //     tabSize: 2,
                // }}
                className="ace-editor-container"
            />
        </div>
        </Resizable>
    )
}

export default CodeEditor;