import "./Card.css"

function Card (cardData) {
   return (
     <div className="card-container" >
      <h3>{cardData.emName}</h3>
       <h4>{cardData.emRole} </h4>
       <p>{cardData.emAge}</p>
     </div>
   )
}

export default Card;