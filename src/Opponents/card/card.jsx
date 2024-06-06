import './card.css'

function Card({image,name,p1,p2,p3}){

    return(
        <>
           <ul className="card">
             <img src={image} alt="" className="rasmcha"/>
             <h1 className="cardh1">{name}</h1>
             <li className="cardli">
                <p className="cardp">{p1}</p>
                <p className="cardp">{p2}</p>
                <p className="cardp">{p3}</p>
             </li>
           </ul>
        </>
    )
}
export default Card