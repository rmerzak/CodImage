import React, { use, useEffect, useRef, useState } from "react";
import { Flex, Heading, Input, Button, Box, useToast, Image } from "@chakra-ui/react";
import Tesseract, { createWorker } from "tesseract.js";
import { Download } from "lucide-react";
import { ImageToTextProps } from "@/interfaces";

const ImageToText = ({setCode}:ImageToTextProps) => {
  const [outText, setOutText] = useState<string>("");
  const [fileUrl, setFileUrl] = useState<string>("");
  const [ocrLoad, setOcrLoad] = useState<boolean>(false);
  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const worker: Tesseract.Worker = createWorker({
    logger: (m) => console.log(m),
  });
  const doOCR = async () => {
    Tesseract.recognize(fileUrl, "eng", { logger: (m) => console.log(m) }).then(({ data: { text } }) => {
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
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg="green.500">
            File_Url is Invalid
          </Box>
        ),
      });
    }
  };
  useEffect(() => {
    handleConvert()
  }, [fileUrl]);

  return (
    // direction={"column"} justifyContent={"flex-start"} w={"100%"} h={"100vh"} alignItems={"center"}
    <div >
       {/* p={5} gap={5} w={"380px"} justifyContent={"center"} alignItems={"center"} direction={"column"} boxShadow="2xl" borderRadius={8} */}
      <div >
      {/* display={"none"} type={"file"} */}
        {/* <input type="file" ref={inputRef} onChange={handleChange} accept="image/png, image/jpg, image/jpeg"  />
        <div>
          <button className="border w-[100px]" onClick={() => inputRef?.current?.click()}>
            Select Image
          </button>
          <button  onClick={handleConvert} className="border">
            Convert
          </button>
        </div> */}
         <div className="export-btn self-center ml-auto">
         <input type="file" ref={inputRef} onChange={handleChange} className="hidden" accept="image/png, image/jpg, image/jpeg"  />
          <button  onClick={() => {inputRef?.current?.click();handleConvert}} className='flex items-center gap-2 py-2 px-3 rounded-md bg-blue-400 text-sm text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300'>
            Import PNG
            <Download />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageToText;
