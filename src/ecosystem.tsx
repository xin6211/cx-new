import { Title } from "./componments";
import mailPng from "../src/assets/img/mail.png";
import smilePng from "../src/assets/img/eco-smile.png";

function Card() {
    return (
        <div className="w-full h-[42lvh] flex flex-row justify-between bg-bggray px-16 py-16 border rounded-regular mt-16 pad:h-[28vh] pad:min-h-[320px] maxpad:h-[46vh] maxpad:max-h-[386px] ph:h-[22vh] ph:py-8 ph:px-12 ph:items-center maxpad:py-12 maxpad:h-[38vh] padpm:min-h-[26rem]">
            <div className="flex flex-col justify-between w-[60%] ph:w-[68%] padpm:w-[70%]">
                <div>
                    <div className="bg-bgpurple p-[2px] font-MonoMedium text-2xl text-black inline-block py-1.5 px-2 rounded-md">Data Contributors</div>
                </div>
                <div className="font-Mono text-black text-xl">Share Data, Earn Rewards</div>
                <div className="font-Mono text-black">
                    <div className="mb-4">Two kinds of data contributors: Axon Edge chatter and authorized Telegram or Discord communities.</div>
                    <div>
                        Contributors share data and earn token rewards, as their sentiment insights fuel our advanced analytics and enrich our sentiment analysis capabilities, all while ensuring user
                        privacy.
                    </div>
                </div>
                <div className="flex flex-row mt-6 ph:mt-0">
                    <div className="bg-bgblack border rounded-2xl text-white font-Mono h-[3.6rem] flex flex-col justify-center px-4">Become Data Contributors</div>
                    <div className="flex flex-row items-center ml-8">
                        <svg className="ph:w-[3rem] ph:h-[3rem]" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20.5" cy="20.5" r="20.5" fill="#363344" />
                            <path
                                d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                                fill="#B2A0E5"
                            />
                        </svg>
                        <div>
                            <div className="font-Mono text-black ml-4">Learn more</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="h-full ph:w-[32%] ph:h-[80%] maxpad:w-[36%] maxpad:h-[auto] maxpad:max-h-full maxpad:self-center" src={mailPng} />
        </div>
    );
}

function CardB() {
    return (
        <div className="w-full h-[42lvh] flex flex-row justify-between bg-bgblack px-16 py-16 border rounded-regular mt-16 pad:h-[28vh] pad:min-h-[300px] maxpad:h-[40vh] maxpad:max-h-[386px] ph:h-[22vh] ph:py-8 ph:px-12 ph:items-center maxpad:py-12 maxpad:h-[38vh] padpm:min-h-[26rem]">
            <div className="flex flex-col justify-between w-[60%] ph:w-[68%]">
                <div>
                    <div className="bg-bgpurple p-[2px] font-MonoMedium text-2xl text-black inline-block py-1.5 px-2 rounded-md">Data Nodes</div>
                </div>
                <div className="font-Mono text-white text-xl">Ensure Data Integrity</div>
                <div className="font-Mono text-white">
                    <div className="mb-4">
                        Data nodes scrutinize the data for accuracy and security, ensuring the ecosystem operates on verified information. Their rigorous validations are essential for maintaining
                        trust and delivering high-quality market analytics.
                    </div>
                </div>
                <div className="flex flex-row mt-6 ph:mt-0">
                    <div className="bg-white border rounded-2xl text-black font-Mono h-[3.6rem] flex flex-col justify-center px-4">Apply Nodes</div>
                    <div className="flex flex-row items-center ml-8">
                        <svg className="ph:w-[3rem] ph:h-[3rem]" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20.5" cy="20.5" r="20" fill="white" stroke="black" />
                            <path
                                d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                                fill="black"
                            />
                        </svg>
                        <div>
                            <div className="font-Mono text-white ml-4">Learn more</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="h-full ph:w-[32%] ph:h-[80%] maxpad:w-[36%] maxpad:h-[auto] maxpad:max-h-full maxpad:self-center" src={smilePng} />
        </div>
    );
}

function Eco() {
    return (
        <div>
            <Title text="CogniXphere DeDIN Ecosystem" />
            <div className="w-full flex flex-row items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00849 1.76521L12 0L10.2518 6.00849L12 12L6.00849 10.2518L0 12L1.76521 6.00849L0 0L6.00849 1.76521Z" fill="#363344" />
                </svg>
                <div className="font-Mono text-black ml-4">Use a DeDIN (Decentralized Data Infrastructure Network) ecosystem to incentivize data contributors and data validators.</div>
            </div>
            <Card />
            <CardB />
        </div>
    );
}

export default Eco;
