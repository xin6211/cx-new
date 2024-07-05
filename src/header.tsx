import { ReactNode, useEffect } from 'react';
import { useState } from "react";

function MenuItem({ text, svgEle, idx, setIdx, selfIdx, closeMenu }: { text: string, svgEle: ReactNode, idx: number, setIdx: React.Dispatch<React.SetStateAction<number>>, selfIdx: number, closeMenu: () => void }) {
    const [bgColor, setBgColor] = useState("#fff");
    useEffect(() => {
        if (idx == selfIdx) {
            setBgColor("#B2A0E5");
        } else {
            setBgColor("#fff");
        }
    }, [bgColor, idx, selfIdx, setBgColor])
    return (
        <div onClick={() => {
            setIdx(selfIdx);
            closeMenu();
        }} style={{ backgroundColor: bgColor }} className="flex items-center bg-white px-8 py-4 w-full rounded-2xl">
            {svgEle}
            <div className="font-Mono text-black text-xl">{text}</div>
        </div>
    )
}

function Header() {

    const [menuH, setMenuH] = useState("0");
    const [menuP, setMenuP] = useState("0");
    const [menuB, setMenuB] = useState("0");
    const [menuIdx, setMenuIdx] = useState(1);

    const closeMenu = () => {
        setMenuH("0");
        setMenuP("0");
        setMenuB("0");
    }

    const openMenu = () => {
        setMenuH("32vh");
        setMenuP("");
        setMenuB("");
    }

    return (
        <div className="fixed top-0 left-0 z-10 bg-bgblack w-[100lvw] h-[4rem] px-[8rem] flex flex-row justify-between items-center pad:px-pxpad pad:w-full ph:px-pxph ph:h-[5rem]">
            <div className="flex flex-row justify-between items-center w-[36%] pad:w-[45%] ph:w-[45%]">
                <div className="flex flex-row justify-evenly items-center">
                    <svg className="pad:w-[3.2rem] ph:w-[2.8rem]" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.65026" cy="9.65026" r="9.65026" fill="#B063FF" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.5336 4.08294C15.9606 2.97002 14.0398 2.31606 11.9663 2.31606C6.63663 2.31606 2.31606 6.63663 2.31606 11.9663C2.31606 14.0398 2.97002 15.9606 4.08294 17.5336C1.6127 15.7859 0 12.9064 0 9.65026C0 4.32057 4.32057 0 9.65026 0C12.9064 0 15.7859 1.6127 17.5336 4.08294Z"
                            fill="#7018C9"
                        />
                        <circle cx="31.2674" cy="31.2668" r="9.65026" fill="#B063FF" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M28.9501 38.601C34.2798 38.601 38.6004 34.2805 38.6004 28.9508C38.6004 26.8773 37.9464 24.9565 36.8335 23.3835C39.3038 25.1311 40.9165 28.0107 40.9165 31.2668C40.9165 36.5965 36.5959 40.9171 31.2662 40.9171C28.01 40.9171 25.1305 39.3044 23.3828 36.8342C24.9558 37.9471 26.8766 38.601 28.9501 38.601Z"
                            fill="#7018C9"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M40.9171 9.65026C40.9171 14.9799 36.5965 19.3005 31.2668 19.3005C31.2669 19.3005 31.2669 19.3005 31.2669 19.3005C31.2669 19.3005 25.3003 20.1918 22.7746 22.7746C20.3181 25.2867 19.3005 31.2668 19.3005 31.2668C19.3005 31.2668 19.3005 31.2668 19.3005 31.2667C19.3005 31.2667 19.3005 31.2668 19.3005 31.2668C19.3005 36.5965 14.9799 40.9171 9.65026 40.9171C4.32057 40.9171 0 36.5965 0 31.2668C0 25.9372 4.32057 21.6166 9.65026 21.6166C9.65027 21.6166 9.65028 21.6166 9.65029 21.6166C9.65029 21.6166 15.6232 20.7738 18.1425 18.1425C20.5139 15.6657 21.607 9.70297 21.6165 9.65061C21.6165 9.65049 21.6165 9.65038 21.6165 9.65026C21.6165 4.32057 25.9371 0 31.2668 0C36.5965 0 40.9171 4.32057 40.9171 9.65026Z"
                            fill="#B063FF"
                        />
                    </svg>
                    <div className="font-MonumentRegular ml-[1rem] text-white">COGNIXPHERE</div>
                </div>
                <div className="flex flex-row items-center justify-evenly border border-white w-[20rem] h-[80%] rounded-md py-[6px] pl-[4px] pad:w-[17rem] ph:hidden">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17 17L13.4153 13.4153M13.4153 13.4153C14.7314 12.0992 15.5455 10.281 15.5455 8.27273C15.5455 4.25611 12.2893 1 8.27273 1C4.25611 1 1 4.25611 1 8.27273C1 12.2893 4.25611 15.5455 8.27273 15.5455C10.281 15.5455 12.0992 14.7314 13.4153 13.4153Z"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <input type="text" className="appearance-none outline-none border-none bg-transparent bg-bgblack w-[80%] font-Mono pt-[1px]" placeholder="Search Tokens and NFTs" />
                </div>
            </div>
            <div onClick={() => {
                if (menuH == "32vh") {
                    closeMenu()
                } else {
                    openMenu()
                }
            }} className="hidden ph:block">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H17" stroke="white" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 7.99976H17" stroke="white" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 15H17" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <div className="flex flex-row justify-between items-center w-[32%] pad:w-[36%] ph:hidden">
                <div className="font-Mono cursor-pointer">Airdrop</div>
                <div className="font-Mono cursor-pointer">Strategy</div>
                <div className="font-Mono cursor-pointer">Become Nodes</div>
                <div className="font-Mono cursor-pointer bg-white text-black rounded-[999px] px-4 py-2">Dashboard</div>
            </div>
            <div style={{ height: menuH, padding: menuP, border: menuB }} className="ease-in-out duration-300 hidden ph:flex flex-col justify-between h-[32vh] absolute top-[5rem] right-1 bg-[#FAFAFA] px-8 py-16 border border-borderlinear rounded-2xl overflow-hidden">
                <MenuItem text="Home" svgEle={<svg className="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4791 8.09167V8.09166H16.475H13.1083C12.4943 8.09166 12.2307 7.97773 12.1131 7.87365C12.0159 7.78767 11.9 7.60101 11.9 7.09166V3.31666C11.9 2.81281 12.0153 2.62466 12.114 2.53694C12.2324 2.43181 12.4966 2.31666 13.1083 2.31666H16.475C17.0868 2.31666 17.351 2.43181 17.4693 2.53694C17.568 2.62466 17.6833 2.81281 17.6833 3.31666V7.09999C17.6833 7.60432 17.5678 7.79147 17.4703 7.87782C17.3533 7.98129 17.0905 8.09551 16.4791 8.09167Z" stroke="black" stroke-width="1.3" />
                    <path d="M17.6833 13.1083V16.475C17.6833 17.0724 17.5593 17.3236 17.4414 17.4414C17.3236 17.5593 17.0724 17.6833 16.475 17.6833H13.1083C12.5109 17.6833 12.2598 17.5593 12.1419 17.4414C12.0241 17.3236 11.9 17.0724 11.9 16.475V13.1083C11.9 12.5109 12.0241 12.2598 12.1419 12.1419C12.2598 12.0241 12.5109 11.9 13.1083 11.9H16.475C17.0724 11.9 17.3236 12.0241 17.4414 12.1419C17.5593 12.2598 17.6833 12.5109 17.6833 13.1083Z" stroke="black" stroke-width="1.3" />
                    <path d="M6.8951 8.09167V8.09166H6.89102H3.52435C2.91028 8.09166 2.64668 7.97773 2.52909 7.87365C2.43194 7.78767 2.31602 7.60101 2.31602 7.09166V3.31666C2.31602 2.81281 2.43131 2.62466 2.53004 2.53694C2.64837 2.43181 2.91259 2.31666 3.52435 2.31666H6.89102C7.50277 2.31666 7.767 2.43181 7.88533 2.53694C7.98405 2.62466 8.09935 2.81281 8.09935 3.31666V7.09999C8.09935 7.60432 7.98384 7.79147 7.88627 7.87782C7.76936 7.98129 7.5065 8.09551 6.8951 8.09167Z" stroke="black" stroke-width="1.3" />
                    <path d="M8.09935 13.1083V16.475C8.09935 17.0724 7.97528 17.3236 7.85744 17.4414C7.7396 17.5593 7.48842 17.6833 6.89102 17.6833H3.52435C2.92695 17.6833 2.67577 17.5593 2.55793 17.4414C2.44009 17.3236 2.31602 17.0724 2.31602 16.475V13.1083C2.31602 12.5109 2.44009 12.2598 2.55793 12.1419C2.67577 12.0241 2.92695 11.9 3.52435 11.9H6.89102C7.48841 11.9 7.7396 12.0241 7.85744 12.1419C7.97528 12.2598 8.09935 12.5109 8.09935 13.1083Z" stroke="black" stroke-width="1.3" />
                </svg>} idx={menuIdx} setIdx={setMenuIdx} selfIdx={1} closeMenu={closeMenu} />
                <MenuItem text="Airdrop" svgEle={<svg className="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2667 10.625H12.5C10.425 10.625 9.375 9.44996 9.375 7.12496V4.7333C9.375 3.8833 9.475 2.66663 10.3583 1.99996C11.1 1.44996 12.1667 1.4083 13.7417 1.86663C15.8083 2.46663 17.5333 4.19163 18.1333 6.2583C18.5917 7.82496 18.55 8.89996 18 9.6333C17.3333 10.525 16.1167 10.625 15.2667 10.625ZM11.9 2.79996C11.5583 2.79996 11.2917 2.86663 11.1167 2.99996C10.7917 3.24163 10.6333 3.8083 10.6333 4.7333V7.1333C10.6333 8.99996 11.35 9.3833 12.5083 9.3833H15.275C16.1917 9.3833 16.7583 9.22496 17.0083 8.89996C17.3 8.51663 17.275 7.74996 16.95 6.62496C16.4667 4.9833 15.05 3.5583 13.4083 3.0833C12.7917 2.89163 12.2917 2.79996 11.9 2.79996Z" fill="#1C1C1C" stroke="black" stroke-width="0.3" />
                    <path d="M9.22466 18.9578C8.78299 18.9578 8.33299 18.9245 7.88299 18.8495C4.47466 18.2995 1.69966 15.5328 1.14966 12.1245C0.441325 7.74112 3.26632 3.60779 7.59132 2.72445C7.93299 2.65779 8.25799 2.87445 8.33299 3.20779C8.39966 3.54945 8.18299 3.87445 7.84966 3.94945C4.19132 4.69945 1.79132 8.19945 2.39966 11.9245C2.86632 14.8078 5.20799 17.1495 8.09132 17.6161C11.833 18.2161 15.3247 15.8078 16.0663 12.1328C16.133 11.7911 16.4663 11.5745 16.7997 11.6411C17.1413 11.7078 17.358 12.0411 17.2913 12.3745C16.4997 16.2661 13.0997 18.9578 9.22466 18.9578Z" fill="#1C1C1C" stroke="black" stroke-width="0.3" />
                </svg>} idx={menuIdx} setIdx={setMenuIdx} selfIdx={2} closeMenu={closeMenu} />
                <MenuItem text="Stategy" svgEle={<svg className="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.76498 9.22308C5.30107 9.22308 1.62695 7.64847 1.62695 5.42535C1.62695 3.20222 5.30107 1.62759 9.76498 1.62759C14.2289 1.62759 17.903 3.2022 17.903 5.42535C17.903 7.64847 14.2289 9.22308 9.76498 9.22308ZM9.76498 8.13802C13.6908 8.13802 16.8179 6.79783 16.8179 5.42533C16.8179 4.05287 13.6908 2.71267 9.76498 2.71267C5.83916 2.71267 2.71203 4.05287 2.71203 5.42535C2.71203 6.79781 5.83916 8.13802 9.76498 8.13802Z" fill="black" stroke="black" stroke-width="0.3" />
                    <path d="M3.89496 7.09389L4.36 8.07426C3.27625 8.58833 2.71203 9.20432 2.71203 9.76563C2.71203 11.1381 5.83916 12.4783 9.76498 12.4783C13.6908 12.4783 16.8179 11.1381 16.8179 9.76563C16.8179 9.17167 16.1855 8.51831 14.9892 7.99167L15.4264 6.99858C16.9731 7.6795 17.903 8.64009 17.903 9.76563C17.903 11.9888 14.2289 13.5634 9.76498 13.5634C5.30107 13.5634 1.62695 11.9888 1.62695 9.76563C1.62695 8.69243 2.47363 7.76811 3.89496 7.09389Z" fill="black" stroke="black" stroke-width="0.3" />
                    <path d="M3.90502 11.4294L4.36865 12.4104C3.27949 12.9252 2.71201 13.543 2.71201 14.1059C2.71201 15.4784 5.83916 16.8186 9.76498 16.8186C13.6908 16.8186 16.8179 15.4784 16.8179 14.1059C16.8179 13.5177 16.1978 12.8709 15.0216 12.3463L15.4636 11.3553C16.988 12.0353 17.903 12.9896 17.903 14.1059C17.903 16.329 14.2289 17.9037 9.76498 17.9037C5.30107 17.9037 1.62695 16.329 1.62695 14.1059C1.62695 13.0301 2.47762 12.104 3.90502 11.4294Z" fill="black" stroke="black" stroke-width="0.3" />
                </svg>} idx={menuIdx} setIdx={setMenuIdx} selfIdx={3} closeMenu={closeMenu} />
                <MenuItem text="Become Nodes" svgEle={<svg className="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1071_2091)">
                        <path d="M2.5 2.5L8.39167 16.6417L10.4833 10.4833L16.6417 8.39167L2.5 2.5Z" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.834 10.8333L15.834 15.8333" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1071_2091">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>} idx={menuIdx} setIdx={setMenuIdx} selfIdx={4} closeMenu={closeMenu} />
                <div className="flex items-center border border-borderlinear rounded-[999px] bg-white px-8 py-4">
                    <svg className="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2C1 1.44772 1.44772 1 2 1H7C7.55228 1 8 1.44772 8 2V10C8 10.5523 7.55228 11 7 11H2C1.44772 11 1 10.5523 1 10V2Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 10C12 9.44772 12.4477 9 13 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H13C12.4477 19 12 18.5523 12 18V10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 2C12 1.44772 12.4477 1 13 1H18C18.5523 1 19 1.44772 19 2V4C19 4.55228 18.5523 5 18 5H13C12.4477 5 12 4.55228 12 4V2Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 16C1 15.4477 1.44772 15 2 15H7C7.55228 15 8 15.4477 8 16V18C8 18.5523 7.55228 19 7 19H2C1.44772 19 1 18.5523 1 18V16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="font-Mono text-black text-xl items-center">Dashboard</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
