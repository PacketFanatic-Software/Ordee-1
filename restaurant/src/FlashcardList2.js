import React from 'react'
import Flashcard2 from "./Flashcard2";

export default function FlashcardList2( {flashcards2} ) {
    return (
        <div className="card-grid2">
                {flashcards2.map(flashcard2 => {
                    return <Flashcard2 flashcard2={flashcard2} key={flashcard2.id} />
                })}
            </div>
    )
}

