import img from '../assets/img1.svg'
import './style/about.scss'
const Body = () => {
    return (
        <>
            <div className="aboutContainer">
                <div className="discriptionBox">
                    <h2 className="discriptionTeg">
                        Want anything to be easy with <span>LaslesVPN.</span>
                    </h2>
                    <p className="discription">
                        Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.
                    </p>
                    <button className='getStartBtn'>
                        Get Started
                    </button>
                </div>
                <div className='discriptionImg'>
                    <img src={img}></img>
                </div>

            </div>

            <div className='servicesBox'>
                <div className='service'>
                    <a href='#' className="icon"><ion-icon  name="person"></ion-icon></a>
                    <p>90+<br /><span>Users</span></p>
                </div>
                <hr />
                <div className='service'>
                    <a href='#' className="icon"><ion-icon name="location"></ion-icon></a>
                    <p>30+<br /><span>Location</span></p>
                </div>
                <hr />
                <div className='service'>
                    <a href='#' className="icon"><ion-icon name="server"></ion-icon></a>
                    <p>50+<br /><span>Servers</span></p>
                </div>
            </div>
        </>
    )
}

export default Body;