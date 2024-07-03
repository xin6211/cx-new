import { Title } from "./componments";

function Cube() {
    return (
        <div className="my-24 w-full">
            <Title text="Genesis NFT - Axon Cube" />
            <div className="flex flex-row items-center border border-black rounded-regular bg-gridBgImg bg-norepeat bg-bggray h-[42rem] pl-12 overflow-hidden drop-shadow-cardShadow ph:hidden">
                <div className="pb-24">
                    <div className="bg-bgpurple p-[2px] font-MonoMedium text-2xl text-black inline-block py-1.5 px-2 rounded-md mb-12">Axon Cube</div>;
                    <div className="font-Mono text-black w-[60%] pad:w-[90%]">
                        Holders of Axon Cube can enjoy higher data inclusion rate for their Axon Edge as a data contributor, meanwhile, enjoy exclusive rewards and premium access to future versions
                        and products of CogniXphere.
                    </div>
                </div>
                <img src="src/assets/img/cards.png" alt="" className="h-[140%] rotate-[20deg] pad:w-[60%] pad:h-[auto]" />
            </div>
            <div className="hidden ph:flex flex flex-col justify-end items-center border border-black rounded-regular bg-cardBgImg bg-cardBgSize bg-no-repeat bg-dsBgPos bg-bggray h-[42rem] px-8 overflow-hidden drop-shadow-cardShadow pb-12">
                <div className="bg-linearBg">
                    <div className="bg-bgpurple p-[2px] font-MonoMedium text-2xl text-black inline-block py-1.5 px-2 rounded-md mb-8">Axon Cube</div>
                    <div className="font-Mono text-black w-full">
                        Holders of Axon Cube can enjoy higher data inclusion rate for their Axon Edge as a data contributor, meanwhile, enjoy exclusive rewards and premium access to future versions
                        and products of CogniXphere.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cube;
