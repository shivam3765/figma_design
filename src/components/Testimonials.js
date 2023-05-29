import './style/testimonials.scss';
import mapImg from '../assets/map-img.svg';

const Testimonials = () => {
    return (
        <>
            <div className='testimonialsConatainer'>
                <h2>
                Huge Global Network of Fast VPN
                </h2>
                <p>See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
                <img src={mapImg} />
            </div>
        </>        
    )
}

export default Testimonials;