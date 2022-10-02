import "./Guide.css"

const Home = () => {
    return <div className="guide-box">
        <div className="guide-box2">
            <div className="guide-description">
                <h1>Demoooooooo!!!</h1>
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
            <iframe  className="youtube" src="https://www.youtube-nocookie.com/embed/0yZcDeVsj_Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        </div>
    </div>
}   


export default Home;