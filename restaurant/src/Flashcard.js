import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    // const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
    //     const frontHeight = frontEl.current.getBoundingClientRect().height
    //     const backHeight = backEl.current.getBoundingClientRect().height
        // setHeight(Math.max(frontHeight, backHeight, 100))
      }

//       useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
//   useEffect(() => {
//     window.addEventListener('resize', setMaxHeight)
//     return () => window.removeEventListener('resize', setMaxHeight)
//   }, [])


    return (
        
        <div
        className={`card ${flip ? `flip` : ''}`}
        
        onClick={() => setFlip(!flip)}
        >
            {/* image */}
            {/* <div className="image">
                <img className="card_bg"
                src="https://img.freepik.com/free-photo/blank-notebook-text-note-wooden-surface-with-copy-sapce_1339-110939.jpg?size=626&ext=jpg"
                alt=""
                ></img>
            </div> */}

            <div className="front" ref={frontEl}>
                {flashcard.question}
                
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flashcard-option">{option}</div>
                    })}
                    
                </div>
            </div>
            <div className="back" ref={backEl}>{flashcard.answer}</div>
            </div>
    )
}
