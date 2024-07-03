import { Title } from "./componments"

function Support() {
    return (
        <div className="w-full">
            <Title text="Supported By" />
            <div className="flex h-[24rem] flex-row justify-center items-center border rounded-regular bg-bggray w-full mb-24">
                <img src="src/assets/img/support.png" alt="" className="w-[64%]" />
            </div>
        </div>
    )
}

export default Support;