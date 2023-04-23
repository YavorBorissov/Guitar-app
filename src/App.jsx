//    E -> 1
//    F -> 2
//    F# -> 3
//    G -> 4
//    G# -> 5
//    A -> 6
//    A# -> 7
//    B -> 8
//    C -> 9
//    C# -> 10
//    D -> 11
//    D# -> 12

import React, { useState } from "react"
import { Button, Container } from "react-bootstrap"
import String from "./components/String"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Numbers from "./components/Numbers"

export default function App() {
    const initialSlides = [0, 7, 3, 10, 5, 0, 7]
    const [slides, setSlides] = useState(initialSlides)
    const [selectedNote, setSelectedNote] = useState(null)

    const handleSelectedNote = (note) => {
        setSelectedNote((prevNote) => (prevNote === note ? null : note))
    }

    const onSlideChange = (index, newSlide) => {
        const updatedSlides = [...slides]
        updatedSlides[index] = newSlide
        setSlides(updatedSlides)
    }

    const onResetClick = () => {
        setSlides([...initialSlides])
    }

    return (
        <Container className="mt-5">
            <Numbers />
            {slides.map((slide, index) => (
                <String
                    key={index}
                    slide={slide}
                    selectedNote={selectedNote}
                    onSelectedNoteChange={handleSelectedNote}
                    onSlideChange={(newSlide) => onSlideChange(index, newSlide)}
                />
            ))}
            <Button onClick={onResetClick}>Reset</Button>
        </Container>
    )
}
