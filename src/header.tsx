function Header() {
    return (
        <div className="fixed top-0 left-0 z-10 bg-bgblack w-[100lvw] h-[4rem] px-[8rem] flex flex-row justify-between items-center pad:px-pxpad pad:w-full  ph:px-pxph">
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
            <div className="hidden ph:block">
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
                <div className="font-Mono cursor-pointer">Dashboard</div>
            </div>
        </div>
    );
}

export default Header;
