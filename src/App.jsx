
import './App.css'
import Card from './Opponents/card/card'
import Header from './Opponents/card/header/header'
import rasm1 from '../src/assets/Cover.png'
import rasm7 from '../src/assets/head1.png'
import rasm8 from '../src/assets/head2.png'
import rasm9 from '../src/assets/head3.png'
import rasm10 from '../src/assets/head4.png'
import Card2 from './Opponents/card2/card2'
import rasm11 from '../src/assets/head5.png'
import rasm12 from '../src/assets/head6.png'
import rasm13 from '../src/assets/head7.png'
import rasm14 from '../src/assets/Oval2.png'
import rasm15 from '../src/assets/Oval3.png'
import rasm16 from '../src/assets/head8.png'
import rasm17 from '../src/assets/head9.png'
import rasm18 from '../src/assets/head10.png'
import rasm19 from '../src/assets/head11.png'
import rasm20 from '../src/assets/head12.png'
import Modal from './Opponents/Modal/modal'


function App() {
  return (
    <>
    <Header />
      <div className="big">
        <div className="appd">
          <Modal />
        </div>
        <div className="right">
          <div className="app">
            <li className="apli">
              <img src={rasm14} alt="" className="ras" />
              <h1 className="apph1">Dollie Blair</h1>
            </li>
            <div className="item">
              <Card name={"A Brief History Of Creation"} image={rasm1} p1={"80k views"} p2={"3 days ago"} p3={"Colfi Smith"} />
              <Card name={"Selecting The Right Hotel"} image={rasm7} p1={"123k views"} p2={"1 month ago"} p3={"Dollie Blair"} />
              <Card name={"Asteroids"} image={rasm8} p1={"43k views"} p2={"12 days ago"} p3={"Dollie Blair"} />
              <Card name={"Telescopes 101"} image={rasm9} p1={"11k views"} p2={"6 month ago"} p3={"Dollie Blair"} />
              <Card name={"Medical Care Is Just"} image={rasm10} p1={"18k views"} p2={"3 month ago"} p3={"Dollie Blair"} />
            </div>
            <h1 className="apph2">Recommended</h1>
            <div className="item2">
              <Card2 name={"Dude You Re Getting A Telescope"} image={rasm12} p1={"89k views"} p2={"3 days ago"} p3={"Gussie French"} />
              <Card2 name={"Moon Gazing"} image={rasm11} p1={"70k views"} p2={"3 days ago"} p3={"Edward Osborne"} />
              <Card2 name={"Moon Gazing"} image={rasm13} p1={"8k views"} p2={"6 days ago"} p3={"Colfi Smith"} />
            </div>
            <li className="apli">
              <img src={rasm15} alt="" className="ras" />
              <h1 className="apph1">Food & Drink</h1>
              <p className="appp">Recommended channel for you</p>
            </li>
            <div className="item3">
              <Card name={"Astronomy Or Astrology"} image={rasm16} p1={"180k views"} p2={"3 month ago"} p3={"Food & Drink"} />
              <Card name={"Advertising Outdoors"} image={rasm17} p1={"12k views"} p2={"1 month ago"} p3={"Food & Drink"} />
              <Card name={"Radio Astronomy"} image={rasm18} p1={"43k views"} p2={"12 days ago"} p3={"Food & Drink"} />
              <Card name={"A Good Autoresponder"} image={rasm19} p1={"11k views"} p2={"1 month ago"} p3={"Food & Drink"} />
              <Card name={"Baby Monitor Technology"} image={rasm20} p1={"118k views"} p2={"3 month ago"} p3={"Food & Drink"} />
            </div>
          </div>
        </div>
        </div>
      </>
      )
}
      export default App
