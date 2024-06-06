import './modal.css'
import fon from '../../assets/mod1.png'
import fon2 from '../../assets/mod2.png'
import fon3 from '../../assets/mod3.png'
import fon4 from '../../assets/mod4.png'
import fon5 from '../../assets/mod5.png'
import fon6 from '../../assets/mod6.png'
import fon7 from '../../assets/mod7.png'
import fon8 from '../../assets/mod8.png'
import fon9 from '../../assets/mod9.png'
import fon10 from '../../assets/mod10.png'
import fon11 from '../../assets/mod11.png'
import fon12 from '../../assets/mod12.png'
import fon13 from '../../assets/mod13.png'
import fon14 from '../../assets/mod14.png'
import fon15 from '../../assets/mod15.png'
import fon16 from '../../assets/mod16.png'


function Modal() {
    return(
      <>
      <div className="modal">
        <ul className="item12">
            <li className="modli">
                <img className='modimg' src={fon} alt="surat" />
                <p className="modp">Home</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon2} alt="surat" />
                <p className="modp">Trending</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon3} alt="surat" />
                <p className="modp">Subscriptions</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon4} alt="surat" />
                <p className="modp">Library</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon5} alt="surat" />
                <p className="modp">History</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon6} alt="surat" />
                <p className="modp">Watch later</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon7} alt="surat" />
                <p className="modp">Favourites</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon8} alt="surat" />
                <p className="modp">Liked videos</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon9} alt="surat" />
                <p className="modp">Music</p>
            </li>
            <li className="modli">
                <img className='modimg' src={fon10} alt="surat" />
                <p className="modp">Games</p>
            </li>
        </ul>
        <ul className="item12">
            <h1 className="modh1">Subscriptions</h1>
            <li className="modli">
                <img className='modimg1' src={fon11} alt="surat" />
                <p className="modp">Gussie Singleton</p>
            </li>
            <li className="modli">
                <img className='modimg1' src={fon12} alt="surat" />
                <p className="modp">Nora Francis</p>
            </li>
            <li className="modli">
                <img className='modimg1' src={fon13} alt="surat" />
                <p className="modp">Belle Briggs</p>
            </li>
            <li className="modli">
                <img className='modimg1' src={fon14} alt="surat" />
                <p className="modp">Eunice Cortez</p>
            </li>
            <li className="modli">
                <img className='modimg1' src={fon15} alt="surat" />
                <p className="modp">Eunice Cortez</p>
            </li>
            <li className="modli">
                <img className='modimg1' src={fon16} alt="surat" />
                <p className="modp">Leah Berry</p>
            </li>
        </ul>
      </div>
      </>
    )
}
export default Modal