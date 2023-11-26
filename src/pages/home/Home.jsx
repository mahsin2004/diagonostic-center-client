import Banner from "./sections/Banner";
import Features from "./sections/Features";
import HealthTips from "./sections/HealthTips";
import NewsLetter from "./sections/NewsLetter";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <HealthTips></HealthTips>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;