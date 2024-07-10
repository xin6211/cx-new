import { Title, GapL } from "./componments";
import pricePng from "../src/assets/img/price.png";
import smilePng from "../src/assets/img/smile.png";

function Price() {
    return (
        <div className="w-full">
            <div className="flex flex-row ph:hidden">
                <Title text="Sentiment affects price" />
                <div className="text-black ml-[1.2rem] w-[16%] min-w-[16rem] font-Mono">Price trends can be judged through sentiment</div>
            </div>
            <div className="flex flex-row justify-between mt-[3.2rem] pad:mt-0 ph:grid ph:grid-rows-[8.8rem_1fr] ph:grid-cols-2 ph:gap-8">
                <div className="flex flex-col justify-around bg-bggray border border-black rounded-regular drop-shadow-cardShadow w-[70rem] py-[3rem] px-[2.4rem] ph:col-span-2 ph:row-start-2 ph:w-full ph:px-[1.6rem] ph:py-[2rem] ph:justify-between">
                    <div className="font-Mono text-black">Sentiment is not just an indicator; it’s the driving force behind demand and supply fluctuations that ultimately drive price movements.</div>
                    <div className="font-Mono text-black">Smart traders blend these sentiment signals with their trading strategies to pinpoint the perfect moments to enter and exit the market.</div>
                </div>
                <div className="bg-bggray border border-black rounded-regular w-[22rem] h-[16rem] drop-shadow-cardShadow flex flex-row justify-center pad:w-[26%] ph:h-full ph:w-full ph:col-start-2">
                    <img src={pricePng} className="ph:scale-150"></img>
                </div>
                <div className="hidden ph:flex ph:flex-col ph:row-start-1 ph:col-start-1 ph:justify-between">
                    <div className="bg-bgpurple p-[2px] font-MonumentRegular text-3xl text-black inline-block py-1.5 px-2 rounded-md">Sentiment affects price</div>
                    <div className="text-black w-[16%] min-w-[16rem] font-Mono">Price trends can be judged through sentiment</div>
                </div>
            </div>
            <GapL />
            <div className="flex flex-row justify-end ph:hidden">
                <div className="text-black mr-[1.2rem] w-[20%] min-w-[22rem] font-Mono text-right">Capturing Market Sentiment with Advanced Emotion AI</div>
                <Title text="Emotion AI" />
            </div>
            <div className="flex flex-row justify-between mt-[3.2rem] pad:mt-0 ph:grid ph:grid-rows-[8.8rem_1fr] ph:grid-cols-2 ph:gap-8 ph:mt-0">
                <div className="bg-bggray border border-black rounded-regular w-[22rem] h-[16rem] drop-shadow-cardShadow flex flex-row justify-center pad:w-[26%] ph:h-full ph:w-full ph:col-start-1">
                    <img src={smilePng}></img>
                </div>
                <div className="hidden ph:flex ph:flex-col ph:row-start-1 ph:col-start-2 ph:justify-between">
                    <div className="bg-bgpurple p-[2px] font-MonumentRegular text-3xl text-black inline-block py-1.5 px-2 rounded-md">Emotion AI</div>
                    <div className="text-black w-[16%] min-w-[16rem] font-Mono">Capturing Market Sentiment with Advanced Emotion AI</div>
                </div>
                <div className="flex flex-col justify-around bg-bggray border border-black rounded-regular drop-shadow-cardShadow w-[70rem] py-[3rem] px-[2.4rem] ph:col-span-2 ph:row-start-2 ph:w-full ph:px-[1.6rem] ph:py-[2rem] ph:justify-between">
                    <div className="font-Mono text-black">
                        Our proprietary Emotion AI large language model uses advanced NLP and machine learning techniques to capture and analyze market sentiment.
                    </div>
                    <div className="font-Mono text-black">
                        By extracting keywords and performing sentiment analysis, it accurately interprets human emotions, transforming text into valuable emotional insights that enhance
                        decision-making and reveal deep market trends.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;
