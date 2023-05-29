import './style/pricing.scss'
import boxImg from '../assets/Free.svg'

const Pricing = () => {
    return (
        <>
            <div className='prigingContainer'>
                <h2>Choose Your Plan</h2>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                <div className='planCardBox'>
                    <div className='planCard'>
                        <div className='cardItems'>
                            <img src={boxImg} />
                            <h2>Free Plan</h2>
                            <ul>
                                <li>Unlimited Bandwitch</li>
                                <li>Encrypted Connection</li>
                                <li>No Traffic Logs</li>
                                <li>Works on All Devices</li>
                            </ul>
                        </div>
                        <div className='priceBox'>
                        <p>Free</p>
                        <button>Select</button>
                        </div>
                    </div>
                    
                    <div className='planCard'>
                        <div className='cardItems'>
                            <img src={boxImg} />
                            <h2>Standard Plan</h2>
                            <ul>
                                <li>Unlimited Bandwitch</li>
                                <li>Encrypted Connection</li>
                                <li>Yes Traffic Logs</li>
                                <li>Works on All Devices</li>
                                <li>Connect Anyware</li>
                            </ul>
                        </div>
                        <div className='priceBox'>
                        <p>$9<span> / mo </span></p>
                        <button>Select</button>
                        </div>
                    </div>
                    
                    <div className='planCard'>
                        <div className='cardItems'>
                            <img src={boxImg} />
                            <h2>Premium Plan</h2>
                            <ul>
                            <li>Unlimited Bandwitch</li>
                                <li>Encrypted Connection</li>
                                <li>Yes Traffic Logs</li>
                                <li>Works on All Devices</li>
                                <li>Connect Anyware</li>
                                <li>Get New Features</li>
                            </ul>
                        </div>
                        <div className='priceBox'>
                        <p>$12<span> / mo </span></p>
                        <button>Select</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Pricing;