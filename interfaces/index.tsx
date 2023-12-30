export interface CodeEditorProps {
    onCodeChange: (code: string) => void;
    language: string;
    theme: string;
    icon: string;
    background?: string;
    currentPading?: string;
}