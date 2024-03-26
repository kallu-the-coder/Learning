import image from '../Assets/Images/image_Piano.jpg'
import './Header.css'
function Header(){
    return (
        <>
            <div id="main-div">
                <div className='image-div'>
                    <img className='image-piano' src={image} alt="No"/>
                </div>
            </div>
        </>
    );
}
export default Header