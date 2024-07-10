import { Title, GapR } from "./componments";

function Card({ name, role, des, img }: { name: string; role: string; des: string; img: string }) {
    return (
        <div className="flex flex-col border border-black rounded-regular drop-shadow-cardShadow w-full bg-white px-12 py-10">
            <div className="flex flex-row items-end">
                <img src={img} alt="" className="w-[32%]" />
                <div className="ml-8">
                    <div className="font-MonoMedium text-black text-2xl">{name}</div>
                    <div className="font-Mono text-black text-lg">{role}</div>
                </div>
            </div>
            <div className="h-[1px] bg-black w-full my-6"></div>
            <div className="font-Mono text-black">{des}</div>
        </div>
    );
}

function Stories() {
    return (
        <div>
            <Title text="Customer Stroies" />
            <div className="grid grid-rows-2 grid-cols-3 gap-12">
                <Card
                    name="John Smith"
                    role="Product Manger"
                    img="/assets/img/whiteman-s.png"
                    des="t has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling."
                />
                <Card
                    name="John Smith"
                    role="Product Manger"
                    img="/assets/img/woman-s.png"
                    des="t has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling."
                />
                <Card
                    name="John Smith"
                    role="Product Manger"
                    img="/assets/img/glassman-s.png"
                    des="t has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling."
                />
                <Card
                    name="John Smith"
                    role="Product Manger"
                    img="/assets/img/whiteman-s.png"
                    des="t has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling."
                />
                <Card
                    name="John Smith"
                    role="Product Manger"
                    img="/assets/img/woman-s.png"
                    des="t has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling."
                />
                <Card
                    name="John Smith"
                    role="Product Manger"
                    img="/assets/img/glassman-s.png"
                    des="t has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling."
                />
            </div>
            <div className="flex justify-end mt-12">
                <div className="flex flex-row w-[16%] justify-between">
                    <div>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.5" y="0.5" width="69" height="69" rx="9.5" transform="matrix(-1 0 0 1 69 0)" stroke="#191A23" />
                            <path
                                d="M47 33.2C47.9941 33.2 48.8 34.0059 48.8 35C48.8 35.9941 47.9941 36.8 47 36.8L47 33.2ZM21.7272 36.2728C21.0243 35.5699 21.0243 34.4302 21.7272 33.7272L33.1823 22.2721C33.8853 21.5691 35.025 21.5691 35.7279 22.2721C36.4309 22.975 36.4309 24.1147 35.7279 24.8177L25.5456 35L35.7279 45.1823C36.4309 45.8853 36.4309 47.025 35.7279 47.7279C35.025 48.4309 33.8853 48.4309 33.1823 47.7279L21.7272 36.2728ZM47 36.8L23 36.8L23 33.2L47 33.2L47 36.8Z"
                                fill="#363344"
                            />
                        </svg>
                    </div>
                    <div>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="10" fill="#363344" />
                            <path
                                d="M23 33.2C22.0059 33.2 21.2 34.0059 21.2 35C21.2 35.9941 22.0059 36.8 23 36.8L23 33.2ZM48.2728 36.2728C48.9757 35.5699 48.9757 34.4302 48.2728 33.7272L36.8177 22.2721C36.1147 21.5691 34.975 21.5691 34.2721 22.2721C33.5691 22.975 33.5691 24.1147 34.2721 24.8177L44.4544 35L34.2721 45.1823C33.5691 45.8853 33.5691 47.025 34.2721 47.7279C34.975 48.4309 36.1147 48.4309 36.8177 47.7279L48.2728 36.2728ZM23 36.8L47 36.8L47 33.2L23 33.2L23 36.8Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <GapR css="mb-24" />
        </div>
    );
}

export default Stories;
