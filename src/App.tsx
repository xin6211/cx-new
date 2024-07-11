import Home from "./home";
import Header from "./header";
import Price from "./price";
import Indices from "./indices";
import Eco from "./ecosystem";
import Edge from "./edge";
import Cube from "./cube";
import Support from "./supported";
import Foot from "./foot";
import { Gap } from "./componments";

function App() {
    return (
        <div className="flex flex-col px-[12rem] pt-[10rem] pad:px-pxpad pad:pt-[8rem] ph:px-pxph ph:pt-[6.4rem] padpm:px-[8rem] maxpad:px-[12rem]">
            <Header />
            <Home />
            <Gap />
            <Price />
            <Indices />
            <Eco />
            <Edge />
            <Cube />
            {/* <Stories /> */}
            <Support />
            <Foot />
        </div>
    );
}

export default App;
