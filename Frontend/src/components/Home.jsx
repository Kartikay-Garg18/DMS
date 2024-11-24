import { Link } from "react-router-dom";
import CarouselCustomNavigation from "./Home/Caraousel/CarouselCustomNavigation";
import EventCategory from "./Home/EventCategory/EventCategory";
import Offering from "./Home/Offering/Offering";

function Home(){

    return(
        <>
        <CarouselCustomNavigation></CarouselCustomNavigation>
        <div className="flex flex-col items-center justify-center bg-pink-50 my-3 py-10">
                <h2 className="text-5xl font-bold text-center font-serif">Give Today</h2>
                <h2 className="text-5xl font-bold text-center font-serif">For a better Tomorrow</h2>
                <Link to="/new-campaign" className="no-underline mt-5 px-6 py-3 bg-red-700 text-white font-bold rounded hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500">
                    Donate Now
                </Link>
        </div>
        <EventCategory></EventCategory>
        <Offering></Offering>
        </>
    )
}

export default Home;