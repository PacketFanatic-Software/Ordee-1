import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard2({flashcard2}) {
    const [flip, setFlip] = useState(false)
    const frontEl = useRef()
    const backEl = useRef()
    return (
        <div
        className={`card ${flip ? `flip` : ''}`}
        
        onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                {flashcard2.question}
                
                <div className="flashcard2-options">
                    {flashcard2.options.map(option => {
                        return <div className="flashcard2-option">{option}</div>
                    })}
                    
                </div>
            </div>
            <div className="back" ref={backEl}>{flashcard2.answer}</div>
            </div>
    )
}
