import { Title } from "./componments";
import supportPng from "../src/assets/img/support.png";

function Support() {
    return (
        <div className="w-full">
            <Title text="Supported By" />
            <div className="flex h-[24rem] flex-row justify-center items-center rounded-regular bg-bggray w-full mb-12 ph:h-[16rem]">
                <img src={supportPng} alt="" className="w-[64%] ph:w-[80%]" />
            </div>
        </div>
    );
}

export default Support;
