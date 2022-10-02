import './index.css';

const HomePage = () => {
    return(
        <div className='homepage'>
            <div className='TextBg'>
                <div className='Text'>
                    <h1>LightAhead™</h1>
                    <p>A Vision for the Blind</p>
                    <div className='Team'>
                        <h3>Avengers Assemble</h3>
                        <button><a href='https://github.com/blws02'>Bernard Lim</a></button>
                        <button><a href='https://github.com/Horstann'>Horstann Ho</a></button>
                        <button><a href='https://github.com/YoNG-Zaii/'>Guo Yong</a></button>
                        <button><a href='https://github.com/Pratham117'>Pratham</a></button>
                        <button><a href='https://github.com/SLAU925'>Shao Wei</a></button>
                    </div>
                </div>
            </div>
            <img id='bgImg' 
            src='https://www.goodnewsnetwork.org/wp-content/uploads/2022/05/hand-on-hand-touch-public-domain-friendship-love-family-loss-gustavo-lanes-hkRA4mfoxEQ-unsplash.jpg'
            alt='CV'/>
        </div>
    )
}

export default HomePage;