import { Title } from "./componments";

function Emo() {
    return (
        <div>
            <div className="flex flex-row justify-end">
                <div className="text-black mr-[1.2rem] w-[20%] min-w-[22rem] font-Mono text-right">Capturing Market Sentiment with Advanced Emotion AI</div>
                <Title text="Emotion AI" />
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-bggray border border-black rounded-regular w-[20%] h-[16rem] drop-shadow-cardShadow flex flex-row justify-center">
                    <img src="./src/assets/img/smile.png"></img>
                </div>
                <div className="flex flex-col justify-between bg-bggray border border-black rounded-regular drop-shadow-cardShadow w-[70%] py-[3rem] px-[2.4rem]">
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

export default Emo;
