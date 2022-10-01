import "./AboutUs.css";
import image1 from "../../images/eyes.png";
import image2 from "../../images/pic2.png";

const AboutUs = () => {
    return <div className="about-box">
        
        <div className="image-box">
            <img className="about-image1" src={image1} alt=""/>
            <img className="about-image2" src={image2} alt=""/>
        </div>
        <div className="content-box"> 
            <h2>About Us</h2>   
            <p className="about-description">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Massa tincidunt nunc pulvinar sapien et ligula. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.</div>
                <br></br>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Massa tincidunt nunc pulvinar sapien et ligula. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque</div>
                <br></br>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Massa tincidunt nunc pulvinar sapien et ligula. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque</div>
            </p>
        </div>
    </div>
}

export default AboutUs;