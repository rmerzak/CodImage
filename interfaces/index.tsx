import { languages } from "@/utils/utilities";

export interface CodeEditorProps {
    onCodeChange: (code: string) => void;
    language: string;
    theme: string;
    icon: string;
    background?: string;
    currentPading?: string;
}

export interface LanguageSelectorProps {
    language: string;
    setLanguage: (language: string) => void;
    setActiveIcon: (icon: string) => void;

}
export interface ThemeSelectorProps {
    theme: string;
    setTheme: (theme: string) => void;
}