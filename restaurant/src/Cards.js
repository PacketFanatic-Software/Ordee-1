  
import React from "react";
import "./Cards.css";
import Cardsflip from "./Cardsflip";



function Cards(){
  
  const cardInfo = [
    {
      title: 'Table 1',
      text:"Order is here!",
    },
    {
      title: "Table 2",
      text: "Order is here!",
    },
    {
      title: "Table 3",
      text: "Order is here!",
    },
    {
        title: "Table 4",
        text: "Order is here!",
      },
      {
        title: "Table 5",
        text: "Order is here!",
      },
      {
        title: "Table 6",
        text: "Order is here!",
      },
      {
        title: "Table 7",
        text: "Order is here!",
      },
      {
        title: "Table 8",
        text: "Order is here!",
      },
    ];
  
    return <div className="grid">
        {cardInfo.map(card => {
               return<Cardsflip card={card} key={card.id}/>
        })
    }
    </div>
  };
  
  export default Cards;