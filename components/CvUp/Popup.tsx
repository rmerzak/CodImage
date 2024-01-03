import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";


const Popup = ({ setIsOpen }: any) => {
    return (
        <>
            <div className="fixed top-0 left-0  w-screen h-screen bg-[#000000]/50 z-50 flex justify-center items-center font-inter">
                <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
                    <div className=" border flex flex-col w-[600px]  scrollbar-thin scrollbar-track-black scrollbar-thumb-rose-500 max-h-[650px] overflow-y-auto overflow-x-hidden rounded-md shadow-lg font-light mx-2">
                        <Image src="/RabiMerzak_1.jpg" alt="Vercel Logo" width={600} height={300} />
                        <Image src="/RabiMerzak_2.jpg" alt="Vercel Logo" width={600} height={300} />
                    </div>
                </OutsideClickHandler>
            </div>
        </>
    );
};
export default Popup;
