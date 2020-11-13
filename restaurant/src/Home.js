import React, { useState } from 'react'
import './Home.css'
import FlashcardList from './FlashcardList'


export default function Home() {
  
    const [flashcards] = useState(SAMPLE_FLASHCARDS)
    return (
      <div className="container">
      <FlashcardList flashcards={flashcards} />
      <div className="page_background">
        <img className="bg_image"
        src={'./grey.jpg'}
        alt=""
        >
        </img>
      </div>
      
      <nav className="navbar">
        <div className="font">
        <div className="first">
        <strong>Blah</strong>
        </div>
        <div className="second">
        <p><strong>Blah</strong></p>
        </div>
        <div className="third">
        <p><strong>Blah</strong></p>
        </div>
        </div> 
    </nav>
    </div>
    );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1, 
    question: 'Table 1',
    answer: 'Order',
    options: [
    ]
  },
  {
    id: 2, 
    question: 'Table 2',
    answer: 'Order',
    options: [
    ]
  },
  {
    id: 3, 
    question: 'Table 3',
    answer: 'Order',
    options: [
    ]
  },
  {
    id: 4, 
    question: 'Table 4',
    answer: 'Order',
    options: [
    ]
  }
]





