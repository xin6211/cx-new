import { useEffect, useState, useRef } from "react";
import { Title, Gap } from "./componments";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import w1Png from "../src/assets/img/slide/w1.png";
import w2Png from "../src/assets/img/slide/w2.png";
import w3Png from "../src/assets/img/slide/w3.png";
import w4Png from "../src/assets/img/slide/w4.png";
import w5Png from "../src/assets/img/slide/w5.png";
import w6Png from "../src/assets/img/slide/w6.png";
import w7Png from "../src/assets/img/slide/w7.png";
import w1SmallPng from "../src/assets/img/slide/w1-small.png";
import w2SmallPng from "../src/assets/img/slide/w2-small.png";
import w3SmallPng from "../src/assets/img/slide/w3-small.png";
import w4SmallPng from "../src/assets/img/slide/w4-small.png";
import w5SmallPng from "../src/assets/img/slide/w5-small.png";
import w6SmallPng from "../src/assets/img/slide/w6-small.png";
import w7SmallPng from "../src/assets/img/slide/w7-small.png";
import edge1 from "../src/assets/img/edge-1.png";
import edge2 from "../src/assets/img/edge-2.png";
import edge3 from "../src/assets/img/edge-3.png";
import edge4 from "../src/assets/img/edge-4.png";

function SliderCard({ img1, img2, name, id, text, numbers, tags }: { img1: string; img2: string; name: string; id: string; rank?: string; bouns?: string; text: string, numbers: string[], tags: string[] }) {
    return (
        <div className="flex flex-col w-[26rem] border border-bgblack rounded-regular overflow-hidden pad:w-[24rem] ph:w-[70vw]">
            <div className="relative">
                <img src={img1} alt="" className="w-full" />
                <div className="absolute flex justify-between top-[84%] right-2">
                    <div className="font-Mono bg-bghalfwhite text border border-bghalfwhite backdrop-blur-lg rounded-[999px] px-3 py-1">{tags[0]}</div>
                    <div className="font-Mono bg-bghalfwhite text border border-bghalfwhite backdrop-blur-lg rounded-[999px] px-3 py-1 ml-2">{tags[1]}</div>
                    <div className="font-Mono bg-bghalfwhite text border border-bghalfwhite backdrop-blur-lg rounded-[999px] px-3 py-1 ml-2">{tags[2]}</div>
                </div>
            </div>
            <div className="flex flex-row bg-white px-6 py-4 h-[14rem]">
                <img src={img2} className="w-[4rem] h-[4rem] mr-6 aspect-square" />
                <div className="flex flex-col w-[70%] justify-between">
                    <div className="font-MonoMedium text-black text-xl pad:text-lg">{name}</div>
                    <div className="font-Mono text-black">ID:{id}</div>
                    <div className="font-Mono text-black">{text}</div>
                    <div className="w-full h-[1px] bg-black my-2"></div>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex">
                            <svg className="pad:w-[1.6rem] h-[1.6rem]" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_757_16013)">
                                    <path
                                        d="M16.2316 12.0937C16.9083 11.7282 17.4876 11.2059 17.9208 10.5704C18.354 9.93499 18.6285 9.20494 18.7214 8.44151C18.8143 7.67807 18.7228 6.90349 18.4546 6.1827C18.1864 5.46192 17.7493 4.81593 17.18 4.2989C16.2475 3.43555 15.0156 2.96895 13.7452 2.99785H13.6931C13.9555 3.26341 14.1864 3.55834 14.3812 3.87678C14.4593 4.00605 14.5307 4.13922 14.5952 4.27577C15.5435 4.45786 16.3808 5.00903 16.9229 5.80815C17.4651 6.60728 17.6678 7.58896 17.4864 8.53745C17.3059 9.36237 16.847 10.1 16.1867 10.6265C15.5265 11.153 14.7052 11.4363 13.8608 11.4287H13.6758C13.8088 11.4981 14.468 11.9375 14.6704 12.0879C14.8336 12.1932 14.9882 12.3111 15.133 12.4406C15.4386 12.6881 15.7283 12.9546 16.0003 13.2386C17.3784 13.6862 18.5797 14.5581 19.4324 15.7296C20.285 16.9011 20.7454 18.3123 20.7477 19.7612C20.7629 19.9094 20.8287 20.0478 20.9341 20.1531C21.0394 20.2585 21.1778 20.3243 21.326 20.3395C21.4093 20.3474 21.4933 20.3387 21.5732 20.3138C21.653 20.2889 21.7272 20.2484 21.7912 20.1945C21.8553 20.1407 21.908 20.0747 21.9462 20.0003C21.9845 19.9259 22.0076 19.8446 22.0141 19.7612C21.9876 18.0352 21.4131 16.3623 20.3738 14.9841C19.3344 13.6059 17.8838 12.5937 16.2316 12.0937Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M17.8678 19.9576C17.8651 18.6609 17.5749 17.3811 17.0179 16.2102C16.461 15.0393 15.6512 14.0065 14.647 13.1863C14.5082 13.0764 14.3694 12.9666 14.2306 12.8625C13.7398 12.5085 13.2148 12.2044 12.6636 11.9546C12.3196 11.7885 11.9616 11.653 11.5938 11.5499C11.7564 11.4621 11.9129 11.3636 12.0622 11.2549C13.1727 10.4893 13.9546 9.33394 14.2524 8.01837C14.5502 6.70281 14.3422 5.32334 13.6697 4.15408C13.422 3.72692 13.1143 3.33747 12.7561 2.99759C11.9919 2.24288 11.0235 1.72848 9.97026 1.51788C8.91707 1.30729 7.82526 1.40972 6.82961 1.81252C5.83396 2.21533 4.97807 2.90089 4.36759 3.78456C3.7571 4.66823 3.41875 5.71134 3.39431 6.7851C3.3866 7.76914 3.64676 8.73673 4.1469 9.58423C4.64705 10.4317 5.36834 11.1272 6.2335 11.5961C4.44081 12.1466 2.87011 13.2539 1.74926 14.7574C0.628413 16.2608 0.0156973 18.0823 0 19.9576C0.00144371 20.1361 0.0722199 20.3071 0.19738 20.4344C0.322541 20.5617 0.492286 20.6354 0.670766 20.6399H17.197C17.3755 20.6354 17.5453 20.5617 17.6704 20.4344C17.7956 20.3071 17.8664 20.1361 17.8678 19.9576Z"
                                        fill="black"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_757_16013">
                                        <rect width="22" height="22" fill="white" transform="translate(0 0.0263672)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="font-Mono text-black ml-1 mr-4 pad:mx-0">{numbers[0]}</span>
                        </div>
                        <div className="flex">
                            <svg className="pad:w-[1.6rem] h-[1.6rem]" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.33801 2.70654H17.6563C18.565 2.7076 19.4363 3.06907 20.0789 3.71167C20.7215 4.35426 21.0829 5.22551 21.084 6.13427V13.7597C21.0829 14.6685 20.7215 15.5397 20.0789 16.1823C19.4363 16.8249 18.565 17.1864 17.6563 17.1874H13.6279L11.9461 18.9419C11.8232 19.0696 11.6759 19.1713 11.5129 19.2409C11.3499 19.3105 11.1745 19.3465 10.9973 19.3469C10.82 19.3465 10.6446 19.3105 10.4816 19.2409C10.3185 19.1713 10.1711 19.0696 10.0482 18.9419L8.36759 17.189H4.33927C3.43002 17.1882 2.55823 16.8267 1.91532 16.1837C1.27242 15.5408 0.91095 14.669 0.910301 13.7597V6.13427C0.911354 5.22551 1.27283 4.35427 1.91542 3.71167C2.55801 3.06908 3.42925 2.7076 4.33801 2.70654ZM14.8532 10.5972C15.0041 10.5972 15.1516 10.5524 15.2771 10.4686C15.4025 10.3848 15.5003 10.2656 15.5581 10.1262C15.6158 9.9868 15.6309 9.8334 15.6015 9.6854C15.572 9.53741 15.4994 9.40146 15.3927 9.29477C15.286 9.18807 15.15 9.1154 15.002 9.08596C14.854 9.05653 14.7006 9.07164 14.5612 9.12938C14.4218 9.18713 14.3027 9.28491 14.2188 9.41038C14.135 9.53584 14.0903 9.68335 14.0903 9.83425C14.0903 10.0366 14.1706 10.2306 14.3137 10.3737C14.4568 10.5168 14.6509 10.5972 14.8532 10.5972ZM10.7153 10.5972C10.8662 10.5972 11.0137 10.5524 11.1392 10.4686C11.2646 10.3848 11.3624 10.2656 11.4202 10.1262C11.4779 9.9868 11.493 9.8334 11.4636 9.6854C11.4342 9.53741 11.3615 9.40146 11.2548 9.29477C11.1481 9.18807 11.0121 9.1154 10.8642 9.08596C10.7162 9.05653 10.5628 9.07164 10.4233 9.12938C10.2839 9.18713 10.1648 9.28491 10.0809 9.41038C9.99712 9.53584 9.95237 9.68335 9.95237 9.83425C9.95237 10.0366 10.0328 10.2306 10.1758 10.3737C10.3189 10.5168 10.513 10.5972 10.7153 10.5972ZM6.57742 10.5972C6.72832 10.5972 6.87582 10.5524 7.00129 10.4686C7.12675 10.3848 7.22454 10.2656 7.28229 10.1262C7.34003 9.9868 7.35514 9.8334 7.3257 9.6854C7.29626 9.53741 7.2236 9.40146 7.1169 9.29477C7.0102 9.18807 6.87426 9.1154 6.72626 9.08596C6.57827 9.05653 6.42487 9.07164 6.28546 9.12938C6.14605 9.18713 6.02689 9.28491 5.94306 9.41038C5.85923 9.53584 5.81448 9.68335 5.81448 9.83425C5.81448 10.0366 5.89486 10.2306 6.03794 10.3737C6.18102 10.5168 6.37508 10.5972 6.57742 10.5972Z"
                                    fill="black"
                                />
                            </svg>
                            <span className="font-Mono text-black ml-2 mr-6 pad:mx-0">{numbers[1]}</span>
                        </div>
                        <div className="flex">
                            <svg className="pad:w-[1.6rem] h-[1.6rem]" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.4973 12.8306C14.9065 12.8306 15.2877 12.9038 15.6411 13.05C15.9945 13.1963 16.3014 13.3952 16.5618 13.6468C16.8221 13.8984 17.0298 14.191 17.1848 14.5245C17.3398 14.858 17.4173 15.2179 17.4173 15.604C17.4173 15.9902 17.3398 16.35 17.1848 16.6835C17.0299 17.017 16.8221 17.3067 16.5618 17.5524C16.3014 17.7982 15.9945 17.9942 15.6411 18.1405C15.2877 18.2867 14.9064 18.3599 14.4973 18.3599C14.0881 18.3599 13.7068 18.2867 13.3534 18.1405C13.0001 17.9942 12.6901 17.7982 12.4235 17.5524C12.1569 17.3067 11.9461 17.017 11.7911 16.6835C11.6361 16.35 11.5586 15.9902 11.5586 15.604C11.5586 15.487 11.5648 15.3788 11.5772 15.2793C11.5896 15.1798 11.6082 15.0774 11.633 14.9721L8.69437 12.6375C8.52078 12.7194 8.33478 12.778 8.13639 12.8131C7.93802 12.8482 7.73342 12.8657 7.52262 12.8657C7.11344 12.8657 6.73216 12.7926 6.37878 12.6463C6.0254 12.5 5.71541 12.304 5.44884 12.0583C5.18224 11.8125 4.97145 11.5229 4.81646 11.1894C4.66148 10.8559 4.58398 10.496 4.58398 10.1099C4.58398 9.7237 4.66146 9.36385 4.81646 9.03034C4.97147 8.69683 5.18224 8.40429 5.44884 8.15268C5.71543 7.9011 6.02542 7.70215 6.37878 7.55588C6.73214 7.40961 7.11346 7.33646 7.52262 7.33646C7.98141 7.33646 8.42158 7.43594 8.84317 7.63486L11.633 5.17741C11.5834 5.02529 11.5586 4.83807 11.5586 4.61572C11.5586 4.22955 11.6361 3.86972 11.7911 3.53619C11.9461 3.20269 12.1569 2.91305 12.4235 2.66731C12.6901 2.42157 13.0001 2.22556 13.3534 2.07929C13.7068 1.93302 14.0881 1.85986 14.4973 1.85986C14.9064 1.85986 15.2877 1.93302 15.6411 2.07929C15.9945 2.22556 16.3014 2.42157 16.5618 2.66731C16.8221 2.91305 17.0298 3.20269 17.1848 3.53619C17.3398 3.8697 17.4173 4.22955 17.4173 4.61572C17.4173 5.00191 17.3398 5.36173 17.1848 5.69524C17.0298 6.02876 16.8221 6.3213 16.5618 6.5729C16.3014 6.82449 15.9945 7.02342 15.6411 7.1697C15.2877 7.31597 14.9064 7.38912 14.4973 7.38912C14.212 7.38912 13.9424 7.35401 13.6882 7.2838C13.434 7.21358 13.2015 7.11413 12.9908 6.9854L10.3311 9.31998C10.4055 9.58913 10.4427 9.85242 10.4427 10.1099C10.4427 10.4375 10.3869 10.7418 10.2753 11.0226L13.0094 13.1992C13.2325 13.0822 13.4681 12.9915 13.7161 12.9272C13.9641 12.8628 14.2245 12.8306 14.4973 12.8306Z"
                                    fill="black"
                                />
                            </svg>
                            <span className="font-Mono text-black ml-2 mr-6 pad:mx-0">{numbers[2]}</span>
                        </div>
                        <div className="flex">
                            <svg className="pad:w-[1.6rem] h-[1.6rem]" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.8246 5.19984C11.2951 4.55856 11.7942 3.97984 12.3218 3.46369C12.7781 3.04138 13.295 2.65818 13.8725 2.31408C14.4499 1.96998 15.0524 1.82139 15.6798 1.86831C16.5638 1.94651 17.3017 2.17722 17.8935 2.56042C18.4852 2.94363 18.9558 3.4285 19.3051 4.01504C19.6545 4.60157 19.8933 5.26631 20.0216 6.00926C20.15 6.75221 20.1928 7.51471 20.15 8.29676C20.1072 9.07881 19.9824 9.82566 19.7757 10.5373C19.5689 11.249 19.3123 11.9137 19.0057 12.5316C18.6991 13.1494 18.3605 13.7203 17.9897 14.2442C17.619 14.7682 17.2483 15.2414 16.8775 15.6637C16.3072 16.3049 15.7119 16.9032 15.0916 17.4585C14.4713 18.0137 13.8796 18.4908 13.3163 18.8896C12.7531 19.2885 12.2398 19.6052 11.7764 19.8398C11.313 20.0744 10.9529 20.1917 10.6963 20.1917C10.4111 20.2074 10.0475 20.0979 9.60545 19.8633C9.16342 19.6287 8.67861 19.3119 8.15103 18.9131C7.62345 18.5142 7.06735 18.0411 6.48273 17.4937C5.89811 16.9462 5.32062 16.3675 4.75026 15.7575C4.37953 15.3665 3.98027 14.9129 3.5525 14.3967C3.12473 13.8806 2.72192 13.3136 2.34405 12.6958C1.96619 12.078 1.6418 11.4093 1.37088 10.6898C1.09996 9.97034 0.950237 9.20393 0.921719 8.3906C0.893201 7.57727 0.971626 6.81477 1.15699 6.10311C1.34236 5.39144 1.62041 4.75407 1.99114 4.191C2.36188 3.62792 2.81817 3.15478 3.36001 2.77158C3.90185 2.38837 4.51499 2.11857 5.19942 1.96216C5.54163 1.88395 5.88385 1.87222 6.22607 1.92696C6.56828 1.98171 6.90337 2.07555 7.23132 2.2085C7.55928 2.34145 7.87298 2.50959 8.17242 2.71292C8.47186 2.91626 8.75704 3.12741 9.02796 3.34638C9.65535 3.86254 10.2542 4.48036 10.8246 5.19984Z"
                                    fill="black"
                                />
                            </svg>
                            <span className="font-Mono text-black ml-2 mr-6 pad:mx-0">{numbers[3]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NaviEle({ idx, cur }: { idx: number; cur: number }) {
    const [fill, setFill] = useState("white");
    useEffect(() => {
        if (idx == cur) {
            setFill("#B2A0E5");
        } else {
            setFill("white");
        }
    }, [cur, fill, idx, setFill]);
    return (
        <div>
            <svg className="ph:w-[1.2rem] ph:h-[1.2rem]" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78812 2.64781L18.7754 0L16.153 9.01273L18.7754 18L9.78812 15.3776L0.775391 18L3.4232 9.01273L0.775391 0L9.78812 2.64781Z" fill={fill} />
            </svg>
        </div>
    );
}

function Slider() {
    const [Idx, setIdx] = useState(1);
    const swiper = useRef<SwiperRef>(null);
    return (
        <div className="bg-bgblack w-full h-[56rem] pt-20 pb-16 flex flex-col justify-between border rounded-regular my-16 pad:pt-28 pad:pb-12 ph:pt-10 ph:pb-12 ph:mt-10 ph:h-[62rem]">
            <div className="w-full">
                <Swiper
                    slidesPerView={3}
                    className="mySwiper"
                    ref={swiper}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        750: {
                            slidesPerView: 2,
                        },
                        820: {
                            slidesPerView: 2,
                        },
                        960: {
                            slidesPerView: 2,
                        },
                        1025: {
                            slidesPerView: 2,
                        },
                        1160: {
                            slidesPerView: 2.5,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: 3,
                        },
                        1800: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                >
                    <SwiperSlide>
                        <SliderCard img1={w2Png} img2={w2SmallPng} name="Alice Lee" id="COGEW0016" text="An innovative engineer with a thirst for design challenges." numbers={["14", "97", "26", "109"]} tags={["English", "Cat Lover", "Passionate"]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard img1={w4Png} img2={w4SmallPng} name="Jamal Washington" id="COGEW0012" text="Resilient entrepreneur chasing ambitious dreams with confidence." numbers={["27", "188", "28", "34"]} tags={["Logically", "Clever", "English"]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard img1={w1Png} img2={w1SmallPng} name="Olivia Taylor" id="COGEW0080" text="Fantastic home organizer with a cat and puppy." numbers={["78", "146", "34", "534"]} tags={["Engineer", "English", "Smart"]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard img1={w3Png} img2={w3SmallPng} name="Naomi Davis" id="COGEW0049" text="Psychologist known for her keen insight and empathetic approach." numbers={["15", "66", "12", "346"]} tags={["Psychologist", "Kind", "Famous"]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard img1={w5Png} img2={w5SmallPng} name="Ethan Zheng" id="COGEW0104" text="A gentle pediatric dentist with hobbies of playing soccer" numbers={["63", "344", "87", "259"]} tags={["Chinese", "Introvert", "Shy"]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard img1={w6Png} img2={w6SmallPng} name="Sofia Hernandez" id="COGEW0094" text="Loves dancing and music, and loves to drink red wine with cheese!" numbers={["95", "438", "74", "164"]} tags={["Bilingual", "Optimistic", "Music"]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard img1={w7Png} img2={w7SmallPng} name="Ruth Miller" id="COGEW0160" text="Retired schoolteacher, enjoys making brownies and cookies." numbers={["64", "791", "37", "191"]} tags={["English", "Kind", "Warm"]} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row justify-between items-center w-[50%]">
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            if (Idx - 1 >= 1) setIdx(Idx - 1);
                            if (swiper.current) {
                                swiper.current.swiper.slidePrev();
                            }
                        }}
                    >
                        <svg className="ph:w-[2.4rem] ph:h-[2.4rem]" width="32" height="30" viewBox="0 0 32 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.0566 16.996C30.159 16.996 31.0526 16.1023 31.0526 15C31.0526 13.8977 30.159 13.004 29.0566 13.004L29.0566 16.996ZM1.03237 13.5886C0.252899 14.3681 0.252899 15.6319 1.03237 16.4114L13.7346 29.1136C14.5141 29.8931 15.7779 29.8931 16.5574 29.1136C17.3368 28.3341 17.3368 27.0704 16.5574 26.2909L5.26646 15L16.5574 3.7091C17.3368 2.92963 17.3368 1.66585 16.5574 0.886374C15.7779 0.106901 14.5141 0.106901 13.7346 0.886374L1.03237 13.5886ZM29.0566 13.004L2.44374 13.004L2.44373 16.996L29.0566 16.996L29.0566 13.004Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-row justify-around w-[32%] ph:hidden">
                        <NaviEle idx={1} cur={Idx} />
                        <NaviEle idx={2} cur={Idx} />
                        <NaviEle idx={3} cur={Idx} />
                        <NaviEle idx={4} cur={Idx} />
                        <NaviEle idx={5} cur={Idx} />
                    </div>
                    <div className="hidden ph:flex flex-row justify-around w-[50%]">
                        <NaviEle idx={1} cur={Idx} />
                        <NaviEle idx={2} cur={Idx} />
                        <NaviEle idx={3} cur={Idx} />
                        <NaviEle idx={4} cur={Idx} />
                        <NaviEle idx={5} cur={Idx} />
                        <NaviEle idx={6} cur={Idx} />
                        <NaviEle idx={7} cur={Idx} />
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            let totalPage = 5
                            if (window.innerWidth < 640) {
                                totalPage = 7
                            }
                            if (Idx + 1 <= totalPage) setIdx(Idx + 1);
                            if (swiper.current) {
                                swiper.current.swiper.slideNext();
                            }
                        }}
                    >
                        <svg className="ph:w-[2.4rem] ph:h-[2.4rem]" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.31445 13.004C1.21211 13.004 0.318485 13.8977 0.318485 15C0.318485 16.1023 1.21211 16.996 2.31445 16.996L2.31445 13.004ZM30.3387 16.4114C31.1182 15.6319 31.1182 14.3681 30.3387 13.5886L17.6365 0.886378C16.857 0.106905 15.5932 0.106904 14.8137 0.886378C14.0343 1.66585 14.0343 2.92963 14.8137 3.7091L26.1046 15L14.8137 26.2909C14.0343 27.0704 14.0343 28.3342 14.8137 29.1136C15.5932 29.8931 16.857 29.8931 17.6365 29.1136L30.3387 16.4114ZM2.31445 16.996L28.9274 16.996L28.9274 13.004L2.31445 13.004L2.31445 16.996Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    );
}

function Card({ title, text, img, left = false, rotate = false, zindex, textWidth, textWidthPm }: { title: string; text: string; img: string; left?: boolean; rotate?: boolean; zindex: string; textWidth: string, textWidthPm: string }) {
    const flexReserver = left ? " flex flex-row-reverse justify-between" : " flex flex-row justify-between";
    const r = rotate ? " rotate-[5deg]" : "";
    const textClass = `w-[${textWidth}%] flex flex-col justify-around padpm:w-[${textWidthPm}%]`
    return (
        <div className={"px-24 py-16 bg-bggray border border-black rounded-regular drop-shadow-cardShadow pad:py-10 pad:px-10 maxpad:py-14 ph:px-6 ph:py-8 ph:items-center padpm:h-[20rem] pad:h-[20rem] maxpad:h-[22rem]" + flexReserver + r} style={{ zIndex: zindex }}>
            <div className={textClass}>
                <div className="font-MonoMedium text-black text-3xl ph:text-xl">{title}</div>
                <div className="font-Mono text-black">{text}</div>
            </div>
            <img src={img} className="h-full w-auto ph:h-[8vh] self-center" />
        </div>
    );
}

function Edge() {
    return (
        <div>
            <div className="flex flex-row mt-24">
                <Title text="Axon Edge" />
                <div className="text-black ml-[1.2rem] w-[28%] min-w-[16rem] font-Mono pad:w-[36%]">Your Personalized Web3 AI Assistant with Emotional Intelligence</div>
            </div>
            <div className="flex flex-col">
                <Card
                    title="Offer Expert Web3 Information and Knowledge Support"
                    text="Axon Edge has been trained on a comprehensive 2T+ database specifically focused on Web3, enabling it to acquire an omniscient perspective in the Web3."
                    img={edge1}
                    zindex="4"
                    textWidth="64"
                    textWidthPm="64"
                />
                <Card
                    title="Engage with Users Through Emotional Dialogue for Deeper Insights"
                    text="With its unparalleled emotional intelligence, Axon Edge engages users in in-depth and emotionally-driven conversations to effectively capture their attitudes towards specific tokens through casual dialogue."
                    img={edge2}
                    left={true}
                    rotate={true}
                    zindex="3"
                    textWidth="64"
                    textWidthPm="64"
                />
                <Card
                    title="Provide Immersive Emotional Companionship to Users"
                    text="Experience advanced emotional companionship with rich conversations powered by cutting-edge NLP, exceptional emotional intelligence for tailored feedback, and long-term memory for personalized interactions."
                    img={edge3}
                    zindex="2"
                    textWidth="64"
                    textWidthPm="64"
                />
                <div className={"px-24 py-16 bg-bggray border border-black rounded-regular drop-shadow-cardShadow pad:py-10 pad:px-10 maxpad:py-14 ph:px-6 ph:py-8 ph:items-center padpm:h-[20rem] pad:h-[20rem] maxpad:h-[22rem] flex flex-row-reverse justify-between rotate-[5deg]"} style={{ zIndex: 1 }}>
                    <div className="w-[56%] flex flex-col justify-around padpm:w-[64%]">
                        <div className="font-MonoMedium text-black text-3xl ph:text-xl">"Unveil User On-chain Behavioral Preferences for Enhanced Sentiment Analysis"</div>
                        <div className="font-Mono text-black">"Axon Edge gains a deeper understanding of users' on-chain behavioral preferences, allowing it to create personalized user tags to enhance sentiment analysis capabilities."</div>
                    </div>
                    <img src={edge4} className="h-full w-auto ph:h-[8vh] maxpad:h-[90%] maxpad:self-center" />
                </div>
            </div>
            <Gap css="mb-[1.6rem]" />
            <div className="flex flex-row mt-20">
                <Title text="Axonverse" />
                <div className="text-black ml-[1.2rem] w-[16%] min-w-[16rem] font-Mono">AI character creator hub and marketplace</div>
            </div>
            <div className="w-full flex flex-row items-center pad:mt-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00849 1.76521L12 0L10.2518 6.00849L12 12L6.00849 10.2518L0 12L1.76521 6.00849L0 0L6.00849 1.76521Z" fill="#363344" />
                </svg>
                <div className="font-Mono text-black ml-4">Create truly tailored and personalized AI Characters</div>
            </div>
            <div className="w-full flex flex-row items-center mt-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00849 1.76521L12 0L10.2518 6.00849L12 12L6.00849 10.2518L0 12L1.76521 6.00849L0 0L6.00849 1.76521Z" fill="#363344" />
                </svg>
                <div className="font-Mono text-black ml-4">Chat with thousands of original AI characters</div>
            </div>
            <div className="w-full flex flex-row items-center mt-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00849 1.76521L12 0L10.2518 6.00849L12 12L6.00849 10.2518L0 12L1.76521 6.00849L0 0L6.00849 1.76521Z" fill="#363344" />
                </svg>
                <div className="font-Mono text-black ml-4">Earn by Creating AI Characters through UGC economy</div>
            </div>
            <Slider />
        </div>
    );
}

export default Edge;
