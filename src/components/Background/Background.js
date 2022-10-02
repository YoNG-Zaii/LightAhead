import "./Background.css";
import blindComm from "../../images/blind_community.jpeg";

const Background = () => {
    return <div className="background-box">
        <div className="bg-content-box">
            <div className="background-content">
                <h2>The Blind Community</h2>
                <div>
                    <p>Having to deal with sight loss or low vision is merely one of the challenges that the visually impaired are facing when living life. Blind individuals are just like anyone else but they just can’t see. Is this case as simple in real life as in our minds, though? Any individual different from the average, such as the visually impaired, face difficulties because they’re not what is considered to be average. This article aims to shed light upon the challenges the visually impaired face just by living life and being the odd ones out.</p>
                    <p>Being blind in a world suited for the sighted, means there will be multiple normal mishaps. Stumbling upon an office chair that wasn’t neatly tucked under the desk or knocking a glass off the table because it was left right on the edge, are small accidents that can happen and that’s okay. However, such mishaps tend to be perceived by sighted individuals as the inability of the visually impaired to perform tasks, while, in reality, they stem from the inaccessibility of our world. Blindness or low vision does not indicate the intelligence of the individual nor how sad their life is. Just because the sighted cannot imagine their world without vision does not mean that the visually impaired have a sad or unhappy life because of their visual condition.</p>
                </div>
            </div>
            <img className="image" src={blindComm} alt=""/>
        </div>
        <div className="bg-content-box">
            <img className="image" src={blindComm} alt=""/>
            <div className="background-content">
                <div>
                    <h2>What are they facing?</h2>
                    <h4>Delivery Problem. </h4>
                    <p>“Sometimes when they knock on the door, and by the time I ... open the door, they’ve left the food hanging (on my gate),” he said. “The first time, I didn't realise the food was there.”</p>
                    <a href="https://www.channelnewsasia.com/cnainsider/time-covid-pandemic-challenges-faced-visually-impaired-singapore-937276">Find Out More</a>
                    <br></br>
                    <br></br>
                    <h4>Navigating A New Landscape</h4>
                    <p>“It was kind of irritating because we spent more time looking for seats”</p>
                    <p>“So my walking memory is no longer of use because I can’t go by certain routes any more”</p>
                    <a href="https://www.channelnewsasia.com/cnainsider/time-covid-pandemic-challenges-faced-visually-impaired-singapore-937276">Find Out More</a>
                </div>
            </div>
            
        </div>
    </div>
}

export default Background;