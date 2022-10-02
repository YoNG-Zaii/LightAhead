import "./Background.css";
import blindComm from "../../images/blind_community.jpeg";

const Background = () => {
    return <div className="background-box">
        <div className="bg-content-box">
            <div className="background-content">
                <h2>The Blind Community</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.</p>
                </div>
            </div>
            <img className="image" src={blindComm} alt=""/>
        </div>
        <div className="bg-content-box">
            <img className="image" src={blindComm} alt=""/>
            <div className="background-content">
                <div>
                    <h2>What are they facing?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.</p>
                </div>
            </div>
            
        </div>
    </div>
}

export default Background;