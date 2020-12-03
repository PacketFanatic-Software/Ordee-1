  
import React,{useEffect,useState} from "react";
import "./Box.css";
import Cardflip from "./Cardflip";
import{db} from './firebase'; 

const Cards = () => {

const[posts,setPosts] = useState();

    useEffect(()=>{
   
        db.collection('posts').onSnapshot(snapshot =>{
          if(snapshot.docs.length === 0){
            console.log('empty')
          }else{
          }
          setPosts(snapshot.docs.map(doc =>({
            id: doc.id,
            post: doc.data()
          })));      
        })
      },[]);


  const cardInfo = [
    {
      title: 'Table1',
      text: "Order",
    },
    {
      title: "Table 2",
      text: "Order",
    },
    {
      title: "Table 3",
      text: "Order",
    },
    {
        title: "Table 4",
        text: "Order",
      },
      {
        title: "Table 5",
        text: "Order",
      },
      {
        title: "Table 6",
        text: "Order",
      },
      {
        title: "Table 7",
        text: "Order",
      },
      {
        title: "Table 8",
        text: "Order",
      }
     
    ];
  
    return <div className="grid">
        {cardInfo.map(card => {
               return<Cardflip card={card} key={card.id}/>
        })
    }
    </div>
  };
  
  export default Cards;