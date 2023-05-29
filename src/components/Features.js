import img2 from '../assets/img2.svg'
import './style/features.scss';

const Features = () => {
    return (
        <>
            <div className="featuresContainer">
                <div className='img'>
                    <img src={img2} />
                </div>
                <div className='featuresDiscription'>
                    <h2>We Provide Many Features You Can Use</h2>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <ul>
                        <li>Powerfull online protection.</li>
                        <li>Internet without borders.</li>
                        <li>Supercharged VPN</li>
                        <li>No specific time limits.</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Features;