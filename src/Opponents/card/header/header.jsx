import './header.css'
import rasm2 from '../../../assets/menu.png'
import rasm3 from '../../../assets/images.jpg'
import rasm4 from '../../../assets/Search.png'
import rasm5 from '../../../assets/Icons.png'
import rasm6 from '../../../assets/Userpic.png'
function Header() {
    return(
     <>
       <div className="head">
        <ul className="headul">
            <img src={rasm2} alt="" className="rasmlar" />
            <img src={rasm3} alt="" className="rasmlar2" />
            <img src={rasm4} alt="" className="rasmlar3" />
        </ul>
        <ul className="headu">
        <img src={rasm5} alt="" className="rasmlar4" />
        <img src={rasm6} alt="" className="rasmlar5" />
        </ul>
       </div>
     </>
    )
}
export default Header