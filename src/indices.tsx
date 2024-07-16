import { useState } from "react";
import { Title, GapL, Gap } from "./componments";
import Ripple from "./animate/ripple";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import id0Png from "../src/assets/img/id0.png";
import id2Png from "../src/assets/img/id2.png";
import id3Png from "../src/assets/img/id3.png";

function Card({ title, img, text }: { title: string; img: string; text: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const gradientSize = 200
    const gradientColor = "rgba(217, 217, 217, 0.333)"
    return (
        <div
            onMouseMove={(e) => {
                const { left, top } = e.currentTarget.getBoundingClientRect();

                mouseX.set(e.clientX - left);
                mouseY.set(e.clientY - top);
            }}
            className="group relative flex flex-col border border-black bg-neutral rounded-regular drop-shadow-cardShadow w-[28%] py-[2rem] px-[2rem] pad:w-[32%] maxpad:h-[20rem] maxpad:w-[30%] ph:w-full ph:hidden">
            <div className="relative flex flex-row items-center z-[1]">
                <img src={img} className="w-[6rem] h-[6rem] pad:w-[4rem] pad:h-[4rem]" />
                <div className="text-black font-MonoMedium text-3xl ml-[1.6rem] pad:text-[1.6rem]">{title}</div>
            </div>
            <div className="relative w-full h-[1px] bg-black my-[1.6rem] z-[1]"></div>
            <div className="relative font-Mono text-black mb-[3.2rem] pad:mb-[0rem] ph:mb-0 z-[1]">{text}</div>
            <motion.div
                className="w-full h-full pointer-events-none absolute -inset-px rounded-regular opacity-0 transition duration-300 group-hover:opacity-100 z-[0]"
                style={{
                    background: useMotionTemplate`
						radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
					`,
                }}
            />
        </div>
    );
}

function CardPh({ title, img, text }: { title: string; img: string; text: string }) {
    const [status, setStatus] = useState("big");
    const [height, setHeight] = useState("");
    const [display, setDisplay] = useState("");

    const small = () => {
        setDisplay("none");
        setHeight("6rem");
        setStatus("small");
    };

    const big = () => {
        setDisplay("block");
        setHeight("10rem");
        setStatus("big");
    };

    return (
        <div
            onClick={() => {
                if (status == "big") {
                    small();
                } else {
                    big();
                }
            }}
            style={{ height }}
            className="ease-in-out duration-500 hidden ph:flex ph:flex-row ph:border ph:border-black ph:bg-white ph:rounded-regular ph:drop-shadow-cardShadow items-center py-[1rem] px-[1rem] h-[10rem] overflow-hidden ph:block ph:mb-[1.6rem]"
        >
            <img src={img} className="h-full mr-4" />
            <div className="flex flex-col justify-between items-start">
                <div className="text-black font-MonoMedium text-2xl">{title}</div>
                <div className="w-full h-[1px] bg-black my-[0.5rem]" style={{ display }}></div>
                <div className="font-Mono text-black mb-0" style={{ display }}>
                    {text}
                </div>
            </div>
        </div>
    );
}

function GCard({ title, text }: { title: string; text: string }) {
    return (
        <div className="flex flex-col justify-between h-full w-[30%] bg-bggray border border-black rounded-regular drop-shadow-cardShadow py-[calc(1rem+2vh)] px-[calc(1rem+2vw)] pad:py-8 ph:px-4">
            <div>
                <div className="font-MonumentRegular rounded-md text-black text-3xl bg-bgpurple py-1 px-1 inline-block pad:text-[1.4rem] maxpad:text-[1.3rem] ph:text-[1.2rem] maxpad:max-w-full padpm:text-[1.4rem]">{title}</div>
            </div>
            <div className="font-Mono text-black text-lg pad:text-[1rem]">{text}</div>
            <div className="flex flex-row items-center hover:scale-[1.15] duration-75 origin-left">
                <svg className="pad:w-[3rem] pad:h-[3rem] ph:w-[3rem] ph:h-[3rem]" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27.6673" cy="27.3333" r="26.6667" fill="#191A23" stroke="#B2A0E5" stroke-width="1.33333" />
                    <path
                        d="M15.334 32.9347C14.3774 33.487 14.0496 34.7102 14.6019 35.6667C15.1542 36.6233 16.3774 36.9511 17.334 36.3988L15.334 32.9347ZM41.3598 21.8511C41.6457 20.7841 41.0126 19.6874 39.9456 19.4016L22.559 14.7428C21.492 14.4569 20.3954 15.0901 20.1095 16.157C19.8236 17.224 20.4568 18.3206 21.5237 18.6065L36.9785 22.7476L32.8374 38.2024C32.5515 39.2694 33.1847 40.366 34.2516 40.6519C35.3185 40.9378 36.4152 40.3046 36.7011 39.2377L41.3598 21.8511ZM17.334 36.3988L40.428 23.0655L38.428 19.6014L15.334 32.9347L17.334 36.3988Z"
                        fill="#B2A0E5"
                    />
                </svg>
                <div className="font-Mono text-black ml-4">Learn more</div>
            </div>
        </div>
    );
}

function GCardR({ title, text }: { title: string; text: string }) {
    return (
        <div className="flex flex-col justify-between h-full w-[30%] bg-bggray border border-black rounded-regular drop-shadow-cardShadow py-[calc(1rem+2vh)] px-[calc(1rem+2vw)] pad:py-8 pad:py-8 ph:px-4">
            <div>
                <div className="font-MonumentRegular rounded-md text-black text-3xl bg-bgpurple py-0 px-1 inline-block pad:text-[1.4rem] maxpad:text-[1.3rem] ph:text-[1.2rem] padpm:text-[1.4rem]">{title}</div>
            </div>
            <div className="font-Mono text-black text-lg pad:text-[1rem]">{text}</div>
            <div className="flex flex-row items-center hover:scale-[1.15] duration-75 origin-left">
                <svg className="pad:w-[3rem] pad:h-[3rem] ph:w-[3rem] ph:h-[3rem]" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27.6673" cy="27.3333" r="26.6667" fill="#191A23" stroke="#B2A0E5" stroke-width="1.33333" />
                    <path
                        d="M15.334 32.9347C14.3774 33.487 14.0496 34.7102 14.6019 35.6667C15.1542 36.6233 16.3774 36.9511 17.334 36.3988L15.334 32.9347ZM41.3598 21.8511C41.6457 20.7841 41.0126 19.6874 39.9456 19.4016L22.559 14.7428C21.492 14.4569 20.3954 15.0901 20.1095 16.157C19.8236 17.224 20.4568 18.3206 21.5237 18.6065L36.9785 22.7476L32.8374 38.2024C32.5515 39.2694 33.1847 40.366 34.2516 40.6519C35.3185 40.9378 36.4152 40.3046 36.7011 39.2377L41.3598 21.8511ZM17.334 36.3988L40.428 23.0655L38.428 19.6014L15.334 32.9347L17.334 36.3988Z"
                        fill="#B2A0E5"
                    />
                </svg>
                <div className="font-Mono text-black ml-4">Learn more</div>
            </div>
        </div>
    );
}

function GRect({ title, text, typ }: { title: string; text: string; typ: boolean }) {
    const rootC = "flex flex-col justify-between py-[2rem] px-[4rem] border border-black rounded-regular drop-shadow-cardShadow w-[67%] h-5/6 pad:px-[2rem] ph:px-4 ";
    const bg = typ ? "bg-bgpurple" : "bg-bgblack";
    return (
        <div className={rootC + bg}>
            <div>
                <div className="font-MonumentRegular rounded-md text-black text-3xl bg-bggray py-0 px-1 inline-block pad:text-[1.4rem] maxpad:text-[1.3rem] ph:text-[1.1rem] padpm:text-[1.4rem]">{title}</div>
            </div>
            <div className="font-Mono text-white text-lg pad:text-[1rem]">{text}</div>
            <div>
                {typ ? (
                    <div className="flex flex-row items-center hover:scale-[1.15] duration-75 origin-left">
                        <svg className="pad:w-[3rem] pad:h-[3rem] ph:w-[3rem] ph:h-[3rem]" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27.6673" cy="27.3333" r="26.6667" fill="#191A23" stroke="#B2A0E5" stroke-width="1.33333" />
                            <path
                                d="M15.334 32.9347C14.3774 33.487 14.0496 34.7102 14.6019 35.6667C15.1542 36.6233 16.3774 36.9511 17.334 36.3988L15.334 32.9347ZM41.3598 21.8511C41.6457 20.7841 41.0126 19.6874 39.9456 19.4016L22.559 14.7428C21.492 14.4569 20.3954 15.0901 20.1095 16.157C19.8236 17.224 20.4568 18.3206 21.5237 18.6065L36.9785 22.7476L32.8374 38.2024C32.5515 39.2694 33.1847 40.366 34.2516 40.6519C35.3185 40.9378 36.4152 40.3046 36.7011 39.2377L41.3598 21.8511ZM17.334 36.3988L40.428 23.0655L38.428 19.6014L15.334 32.9347L17.334 36.3988Z"
                                fill="#B2A0E5"
                            />
                        </svg>
                        <div className="font-Mono text-black ml-4">Learn more</div>
                    </div>
                ) : (
                    <div className="flex flex-row items-center hover:scale-[1.15] duration-75 origin-left">
                        <svg className="pad:w-[3rem] pad:h-[3rem] ph:w-[3rem] ph:h-[3rem]" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27.3333" cy="27.3333" r="26.6667" fill="#F3F3F3" stroke="#B2A0E5" stroke-width="1.33333" />
                            <path
                                d="M15 32.9347C14.0434 33.487 13.7157 34.7102 14.2679 35.6667C14.8202 36.6233 16.0434 36.9511 17 36.3988L15 32.9347ZM41.0259 21.8511C41.3117 20.7841 40.6786 19.6874 39.6116 19.4016L22.225 14.7428C21.1581 14.4569 20.0614 15.0901 19.7755 16.157C19.4896 17.224 20.1228 18.3206 21.1897 18.6065L36.6445 22.7476L32.5034 38.2024C32.2175 39.2694 32.8507 40.366 33.9176 40.6519C34.9846 40.9378 36.0812 40.3046 36.3671 39.2377L41.0259 21.8511ZM17 36.3988L40.094 23.0655L38.094 19.6014L15 32.9347L17 36.3988Z"
                                fill="#B2A0E5"
                            />
                        </svg>
                        <div className="font-Mono text-white ml-4">Learn more</div>
                    </div>
                )}
            </div>
        </div>
    );
}

function Grid() {
    return (
        <div className="flex flex-col h-[calc(32rem+16vh)] w-full pad:h-[calc(22rem+12vh)] pad:min-h-[500px] maxpad:h-[36rem]">
            <div className="flex flex-row justify-between items-end h-[50%] maxpad:h-[60%] mb-[1.5%]">
                <GCard title={"Key News & Events"} text="Track key news and events that could impact token prices." />
                <GRect typ={true} title="Top/ Trending Tokens & NFTs" text="Capture the real-time market sentiment of thousands of tokens and NFTs." />
            </div>
            <div className="flex flex-row justify-between h-[50%] maxpad:h-[60%] mt-[1.5%]">
                <GRect typ={false} title="KOL & Community Attitudes" text="Monitor the sentiments of top global KOLs and communities to stay ahead of market trends." />
                <GCardR title={"Hot Airdrops"} text="Discover hot airdrop programs and never miss an opportunity to profit." />
            </div>
        </div>
    );
}

function News() {
    return (
        <div className="flex flex-row items-center w-[24rem] absolute right-[180%] top-[-64%] ph:top-[-170%] ph:right-[-25%]">
            <div className="mr-4 flex flex-col items-end ph:w-[25vw]">
                <div className="font-MonoMedium text-black text-2xl text-right mb-1">Social Media & News</div>
                <div className="font-Mono text-black text-right w-[90%]">Monitor social mentions and key news to understand overall market sentiment.</div>
            </div>
            <div>
                <div className="p-[0.5rem] border border-2 border-black bg-white">
                    <svg className="ph:w-[2rem] ph:h-[2rem]" width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M34.859 5.44458H7.10715C6.41336 5.44458 5.8457 6.01223 5.8457 6.70603V34.4579C5.8457 35.1517 6.41336 35.7194 7.10715 35.7194H34.859C35.5528 35.7194 36.1205 35.1517 36.1205 34.4579V6.70603C36.1205 6.01223 35.5528 5.44458 34.859 5.44458ZM20.9831 28.1507H10.8915V20.582H20.9831V28.1507ZM31.0747 28.1507H23.506V25.6278H31.0747V28.1507ZM31.0747 23.1049H23.506V20.582H31.0747V23.1049ZM31.0747 18.0591H10.8915V13.0133H31.0747V18.0591Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function Communities() {
    return (
        <div className="flex flex-row items-center w-[24rem] absolute top-[0%] left-[200%] pad:left-[180%] pad:top-[0%] ph:top-[-50%] ph:left-[180%] ph:w-[18rem]">
            <div>
                <div className="p-[0.5rem] border border-2 border-black bg-white">
                    <svg className="ph:w-[2rem] ph:h-[2rem]" width="42" height="42" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1072_2259)">
                            <path
                                d="M31.358 10.1439C30.5522 8.23941 29.3802 6.4814 27.9152 5.01639L27.6954 4.79664C24.6922 1.93988 20.6634 0.328369 16.4881 0.328369C12.1664 0.328369 8.13759 2.01313 5.06107 5.01639V5.08964C2.05781 8.16616 0.373047 12.1949 0.373047 16.4435C0.373047 18.2015 0.666048 19.813 1.1788 21.4245C1.69155 22.8895 2.35081 24.2812 3.22981 25.5997L3.37631 25.7462V31.8993C3.37631 32.1923 3.66931 32.4853 3.96232 32.4853H16.4881C18.6856 32.4853 20.7367 32.0458 22.7877 31.24C24.6922 30.4343 26.4502 29.2623 27.9152 27.7973L28.1349 27.5775C31.065 24.5742 32.6765 20.6187 32.6765 16.3702C32.6032 14.2459 32.1637 12.1949 31.358 10.1439ZM22.2749 19.0072L16.4881 24.5742C16.4149 24.6475 16.2684 24.7207 16.1219 24.7207C15.9754 24.7207 15.9021 24.6475 15.7556 24.5742L10.0421 19.0805L9.96885 19.0072C8.57709 17.6155 8.21084 15.8574 8.87009 14.1727C9.60259 12.3414 11.4339 11.0962 13.3384 11.0962C14.2174 11.0962 15.0964 11.3892 15.9021 11.9019L16.0486 11.9752L16.1951 11.9019C17.0009 11.3892 17.8799 11.0962 18.7589 11.0962C20.6634 11.0962 22.4947 12.3414 23.2272 14.1727C24.0329 15.8574 23.6667 17.6155 22.2749 19.0072Z"
                                fill="black"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1072_2259">
                                <rect width="32.2931" height="32.2931" fill="white" transform="translate(0.373047 0.296875)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="ml-4 flex flex-col ph:w-[30vw]">
                <div className="font-MonoMedium text-black text-2xl mb-1">Private Communities</div>
                <div className="font-Mono text-black">Capture core traders’ sentiment through community dialogue.</div>
            </div>
        </div>
    );
}

function Chat() {
    return (
        <div className="flex flex-col items-start w-[24rem] absolute top-[200%] left-[40%] pad:left-[15%] pad:top-[180%] ph:top-[180%] ph:left-[20%]">
            <div>
                <div className="p-[0.5rem] border border-2 border-black bg-white">
                    <svg className="ph:w-[2rem] ph:h-[2rem]" width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.6598 4.96207C19.3185 4.96207 19.0418 5.23909 19.0415 5.58044C19.0415 5.92178 19.3185 6.1988 19.6598 6.1988C20.0012 6.1988 20.2782 5.92178 20.2782 5.58044C20.2786 5.23947 20.0012 4.96207 19.6598 4.96207ZM14.5067 17.743C14.848 17.743 15.125 18.02 15.125 18.3613C15.125 18.7027 14.848 18.9797 14.5067 18.9797C14.1653 18.9797 13.8883 18.7027 13.8883 18.3613C13.8883 18.02 14.1653 17.743 14.5067 17.743ZM25.2258 17.743C25.5672 17.743 25.8442 18.02 25.8442 18.3613C25.8442 18.7027 25.5672 18.9797 25.2258 18.9797C24.8845 18.9797 24.6075 18.7027 24.6075 18.3613C24.6075 18.02 24.8845 17.743 25.2258 17.743ZM25.2258 16.0945C23.9736 16.0945 22.9586 17.1091 22.9586 18.3617C22.9586 19.6139 23.9732 20.6289 25.2258 20.6289C26.4781 20.6289 27.493 19.6139 27.493 18.3617C27.4934 17.1095 26.4788 16.0945 25.2258 16.0945ZM14.5067 16.0945C13.2544 16.0945 12.2395 17.1091 12.2395 18.3617C12.2395 19.6139 13.2541 20.6289 14.5067 20.6289C15.7589 20.6289 16.7739 19.6139 16.7739 18.3617C16.7743 17.1095 15.7589 16.0945 14.5067 16.0945ZM26.533 25.4539C26.3381 25.0422 25.8465 24.8681 25.4344 25.063C25.4079 25.0755 22.7581 26.3202 19.9391 26.3202C17.2428 26.3202 13.8565 25.0494 13.8228 25.0369C13.3971 24.8753 12.921 25.0899 12.7598 25.5156C12.5982 25.9414 12.8124 26.4174 13.2382 26.579C13.388 26.6358 16.937 27.9698 19.9395 27.9698C23.1267 27.9698 26.0213 26.6104 26.1424 26.5529C26.5538 26.3573 26.7286 25.8653 26.533 25.4539ZM19.6602 3.31323C20.9124 3.31323 21.9274 4.32819 21.9274 5.58044C21.9274 6.54166 21.3287 7.36097 20.4844 7.69097V9.78598C28.2976 10.133 34.502 15.3758 34.5024 21.7937C34.5024 28.4364 27.8575 33.8211 19.6606 33.8211C15.7029 33.8211 12.1104 32.9731 9.44965 30.9272L4.81836 37.2596V22.2906L4.83425 22.3042C4.82555 22.1351 4.81836 21.9652 4.81836 21.7941C4.81836 15.3758 11.0228 10.133 18.836 9.78636V7.69135C17.9917 7.36135 17.393 6.54204 17.393 5.58081C17.393 4.32857 18.4076 3.31323 19.6602 3.31323Z"
                            fill="#070102"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col mt-1 ph:w-[30vw]">
                <div className="font-MonoMedium text-black text-2xl mb-1">1o1 AI Chat</div>
                <div className="font-Mono text-black">Use one-on-one AI chat to deeply explore trader psychology.</div>
            </div>
        </div>
    );
}

function Board() {
    return (
        <div className="flex flex-col bg-bggray h-[100vh] max-h-[960px] rounded-regular mb-[12rem] w-full pad:h-[48vh] pad:min-h-[600px] ph:h-[42vh] maxpad:h-[86vh]">
            <div className="flex flex-row justify-between items-center px-[calc(2rem+2vw)] h-[calc(2rem+6vh)] pad:h-[10%]">
                <svg className="pad:w-[4.2rem] ph:w-[3.6rem]" width="80" height="72" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_619_3803)">
                        <path
                            d="M11.1504 39.9867L31.6491 60.4853L37.2884 54.8533L22.429 39.9867H69.1382V32.0133H22.429L37.2884 17.1467L31.6491 11.5146L11.1504 32.0133V39.9867Z"
                            stroke="#3E3E3E"
                            stroke-miterlimit="10"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_619_3803">
                            <rect width="59" height="50" fill="white" transform="translate(10.5 11)" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="flex flex-row justify-between w-[80%]">
                    <div className="font-Mono text-black cursor-pointer ph:w-[30%] ph:text-center ph:font-MonoMedium">SOCIAL MEDIA & NEWS</div>
                    <div className="font-Mono text-black cursor-pointer ph:w-[30%] ph:text-center ph:font-MonoMedium">PRIVATE COMMUNITIES</div>
                    <div className="font-Mono text-black cursor-pointer ph:w-[20%] ph:text-center ph:font-MonoMedium">1O1 AI CHAT</div>
                </div>
                <svg className="pad:w-[4.2rem] ph:w-[3.6rem]" width="80" height="72" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_619_3808)">
                        <path
                            d="M68.8496 39.9867L48.3509 60.4853L42.7116 54.8533L57.571 39.9867H10.8618V32.0133H57.571L42.7116 17.1467L48.3509 11.5146L68.8496 32.0133V39.9867Z"
                            stroke="#3E3E3E"
                            stroke-miterlimit="10"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_619_3808">
                            <rect width="59" height="50" fill="white" transform="matrix(-1 0 0 1 69.5 11)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="bg-no-repeat bg-dsBgImg bg-dsBgSize bg-dsBgPos flex flex-row justify-center items-center w-full h-[calc(calc(100%-calc(2rem+6vh))-1px)] relative">
                <Ripple />
                <div className="w-[8%] relative">
                    <svg className="w-full h-full" width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="77.2083" cy="77.2083" r="75.0833" fill="#B2A0E5" stroke="black" stroke-width="4.25" />
                        <path d="M77.7803 95.6846H53.918L49.4355 109H35.2852L58.4004 44.2246H73.6934L96.6328 109H81.9551L77.7803 95.6846ZM74.001 84.5225L65.915 59.0342L57.5654 84.5225H74.001ZM102.94 44.2246H116.387V109H102.94V44.2246Z" fill="black" />
                    </svg>
                    <News />
                    <Chat />
                    <Communities />
                </div>
            </div>
        </div>
    );
}

function Indices() {
    return (
        <div className="mt-[6rem]">
            <Title text="Sentiment Data and Indices" />
            <div className="flex flex-row justify-between ph:flex-col">
                <Card img={id0Png} title="FOMO & FUD" text="Provide a multi-token market FUD & FOMO ratio to offer a snapshot of current market conditions." />
                <Card img={id2Png} title="8 KEY EMOTIONS" text="Capture eight key trading emotions in the market: joy, trust, fear, surprise, sadness, disgust, anger, and anticipation." />
                <Card img={id3Png} title="SENTIMENT INDEX" text="An innovative index that combines social sentiment with secondary market indicators." />
                <CardPh img={id0Png} title="FOMO & FUD" text="Provide a multi-token market FUD & FOMO ratio to offer a snapshot of current market conditions." />
                <CardPh img={id2Png} title="8 KEY EMOTIONS" text="Capture eight key trading emotions in the market: joy, trust, fear, surprise, sadness, disgust, anger, and anticipation." />
                <CardPh img={id3Png} title="SENTIMENT INDEX" text="An innovative index that combines social sentiment with secondary market indicators." />
            </div>
            <GapL css="mt-[1.6rem]" />
            <Grid />
            <Gap css="mb-[1.6rem]" />
            <Title text="Three Data Sources" />
            <Board />
        </div>
    );
}

export default Indices;
