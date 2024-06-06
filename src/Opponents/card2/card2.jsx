import './card2.css'

function Card2({image,name,p1,p2,p3}){

    return(
        <>
           <ul className="card2">
             <img src={image}  className="rasmcha2"/>
             <h1 className="card2h1">{name}</h1>
             <li className="card2li">
                <p className="card2p">{p1}</p>
                <p className="card2p">{p2}</p>
                <p className="card2p">{p3}</p>
             </li>
           </ul>
        </>
    )
}
export default Card2