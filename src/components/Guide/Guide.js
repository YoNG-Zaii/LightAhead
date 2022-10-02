import "./Guide.css"

const Home = () => {
    return <div className="guide-box">
        <div className="guide-box2">
            <div className="guide-description">
                <h1>Demo of Luminos™</h1>
                <h3>Step 1</h3>
                <p>Activate the Detection Model.</p>
                <h3>Step 2</h3>
                <p>Choose your point of view (Front/Rear Camera).
                <br></br>
                Scan around your surroundings.</p>
                <h3>Step 3</h3>
                <p>Select the "Results" button.<br></br>
                To get audio feedback, press the list of results.</p>
            </div>
            <button className='videoBtn'><a href='https://www.youtube.com/shorts/pRgkEFUXJ0U'>Watch the Demo Video</a></button>
        </div>
    </div>
}   


export default Home;