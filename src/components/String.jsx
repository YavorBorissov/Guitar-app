import React, { useRef, useEffect } from "react"
import "./String.css"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

export default function String({
    slide,
    onSlideChange,
    selectedNote,
    onSelectedNoteChange,
}) {
    const sliderRef = useRef()

    useEffect(() => {
        sliderRef.current.slickGoTo(slide)
    }, [slide])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 1,
        initialSlide: slide,
        swipeToSlide: true,
        touchThreshold: 1001,
        nextArrow: <FaArrowRight />,
        prevArrow: <FaArrowLeft />,
        afterChange: (current) => {
            onSlideChange(current)
        },
    }

    const notes = [
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
    ]

    const handleNoteClick = (note) => {
        onSelectedNoteChange(note)
    }

    return (
        <div className="container-slider">
            <Slider ref={sliderRef} {...settings}>
                {notes.map((note, index) => (
                    <div
                        key={index}
                        id="slider-item"
                        onClick={() => handleNoteClick(note)}
                        className={`note-container ${
                            selectedNote === note ? "note-selected" : ""
                        }`}
                    >
                        <div className="note">{note}</div>
                    </div>
                ))}
                {notes.map((note, index) => (
                    <div
                        key={index}
                        id="slider-item"
                        onClick={() => handleNoteClick(note)}
                        className={`note-container ${
                            selectedNote === note ? "note-selected" : ""
                        }`}
                    >
                        <div className="note">{note}</div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
