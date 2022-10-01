import './index.css';

const HomePage = () => {
    return(
        <div className='homepage'>
            <div className='TextBg'>
                <div className='Text'>
                    <h1>LightAhead™</h1>
                    <p>With it, the blind can see the world.</p>
                </div>
            </div>
            <img id='bgImg' 
            src='https://i.pcmag.com/imagery/articles/061CyMCZV6G2sXUmreKHvXS-1.fit_lim.v1581020108.jpg'
            alt='CV'/>
        </div>
    )
}

export default HomePage;