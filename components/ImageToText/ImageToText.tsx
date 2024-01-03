import React, { use, useEffect, useRef, useState } from "react";
import { Flex, Heading, Input, Button, Box, useToast, Image, Spinner, Progress } from "@chakra-ui/react";
import Tesseract, { createWorker } from "tesseract.js";
import { Download, Upload } from "lucide-react";
import { ImageToTextProps } from "@/interfaces";
import { Circles, RotatingLines } from "react-loader-spinner";

const ImageToText = ({ setCode }: ImageToTextProps) => {
  const [outText, setOutText] = useState<string>("");
  const [fileUrl, setFileUrl] = useState<string>("");
  const [ocrLoad, setOcrLoad] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const worker: Tesseract.Worker = createWorker({
    logger: (m) => console.log(m),
  });
  const doOCR = async () => {
    Tesseract.recognize(fileUrl, "eng", { logger: (m) => console.log("inside = ", m.status, m.progress) }).then(({ data: { text } }) => {
      setOutText(text);
      setCode(text);
      console.log(text);
      setOcrLoad(false);
    });
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (e: React.FormEvent) => {
    try {
      if (inputRef != null) {
        const myUrl = inputRef!.current!.files[0];
        const url = URL.createObjectURL(myUrl);
        setFileUrl(url);
      }
    } catch (error) {
      setOutText("Network : : " + error);
    }
  };
  const handleConvert = () => {
    if (fileUrl) {
      setOcrLoad(true);
      doOCR();
    } else {
      setOutText("No Image Selected");
    }
  };
  useEffect(() => {
    handleConvert()
  }, [fileUrl]);

  return (
    <div className="export-btn self-center ml-auto flex items-center justify-center">
      <input type="file" ref={inputRef} onChange={handleChange} className="hidden" accept="image/png, image/jpg, image/jpeg" />
      {ocrLoad === true ? (
          <RotatingLines
            visible={true}
            height="40"
            width="40"
            color="#fff"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
      ) :
        <button onClick={() => { inputRef?.current?.click(); handleConvert }} className='flex items-center gap-2 py-2 px-3 rounded-md bg-blue-400 text-sm text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300'>
          Import PNG
          <Upload />
        </button>}
    </div>

  );
};

export default ImageToText;
