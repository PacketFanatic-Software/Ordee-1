import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './First_Page.css'
import FlashcardList from './FlashcardList'
import FlashcardList2 from './FlashcardList2'

export default function First_Page() {
  
    const [flashcards] = useState(SAMPLE_FLASHCARDS)
    const [flashcards2] = useState(SAMPLE_FLASHCARDS2)

    return (
      <div className="container">
        <div>
      <FlashcardList flashcards={flashcards} />
      </div>
      <div>
      <FlashcardList2 flashcards2={flashcards2} />
      </div>
      <nav className="navbar"> 
      <Link className="navicon" to="/Next_Page">
      <div>
        <img className="navicon"
        src={'./ordee2.png'}
        alt=""
        />
      </div>
      <Link className="usericon" to='/Next_Page'>
        <div>
          <img className="user_icon"
          src={'./usericon.png'}
          alt=""
          />
        </div>
      </Link>
      </Link>
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

const SAMPLE_FLASHCARDS2 = [
  {
    id: 5, 
    question: 'Table 5',
    answer: 'Order',
    options: [
    ]
  },
  {
    id: 6, 
    question: 'Table 6',
    answer: 'Order',
    options: [
    ]
  },
  {
    id: 7, 
    question: 'Table 7',
    answer: 'Order',
    options: [
    ]
  },
  {
    id: 8, 
    question: 'Table 8',
    answer: 'Order',
    options: [
    ]
  }
]








