import Home from "./home";
import Header from "./header";
import Price from "./price";
import Indices from "./indices";
import Eco from "./ecosystem";
import Edge from "./edge";
import Cube from "./cube";
import Stories from "./stories";
import Support from "./supported";
import Foot from "./foot";
import { Gap, GapL } from "./componments";

function App() {
    return (
        <div className="px-[10rem] pt-[10rem] pad:px-pxpad pad:pt-[8rem] ph:px-pxph ph:pt-[6.4rem]">
            <Header />
            <Home />
            <Gap />
            <Price />
            <Indices />
            <Eco />
            <Edge />
            <Cube />
            {/* <Stories />
            <Support />
            <Foot /> */}
        </div>
    );
}

export default App;
