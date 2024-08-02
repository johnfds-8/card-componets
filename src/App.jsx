import Card from "./componets/card/Card";
function App() {
  const cardData = {
    card1: {
      emName: "Josh",
      emRole: "Software Enginer",
      emAge: "38",
    }
    ,
    card2: {
      emName: "Rahul",
      emRole: "Backed Enginer",
      emAge: "38",
    },
    card3: {
      emName: "Radhika",
      emRole: "Salesforce Enginer",
      emAge: "38",
    },
    card4: {
      emName: "Ramya",
      emRole: "DeOps Enginer",
      emAge: "38",
    }

  }

  return (
    <div>
      <h1> Emoplyee Infomation</h1>
      <div className="container">

        <Card {...cardData.card1} />
        <Card {...cardData.card2} />
        <Card {...cardData.card3} />
        <Card {...cardData.card4} />

      </div>
    </div>

  )
}

export default App;