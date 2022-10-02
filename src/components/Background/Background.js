import "./Background.css";
import blindComm from "../../images/blind_community.jpeg";
import blind1 from "../../images/blind1.png";
import blind2 from "../../images/blind2.png";


const Background = () => {
    return <div className="background-box">
        <div className="bg-content-box">
            <div className="background-content">
                <h2>The Blind Community</h2>
                <div>
                    <p>In this day and age, having to deal with sight loss is one of the notable challenges that the visually impaired are facing when living life. Blind individuals are just like anyone else but they just can’t see. Becoming aware of objects within an environment or route can make it so much easier for a blind person to navigate around successfully. Therefore, our invention aims to help solve the problems that this community would be facing in manuevering around.</p>
                </div>
            </div>
            <img className="image" src={blind1} alt=""/>
        </div>
        <div className="bg-content-box">
            <img className="image" src={blind2} alt=""/>
            <div className="background-content">
                <div>
                    <h2>What are they facing?</h2>
                    <h4>Problems in navigating around </h4>
                    <p>Environmental Challenges
Without any aid from technology or human assistance, the visually impaired must memorize the location of every obstacle or item in their home environment and not being able to see means that they have a difficult time navigating outside the spaces that they're accustomed to and are prone to accidents happening.</p>
                </div>
            </div>
            
        </div>
    </div>
}

export default Background;