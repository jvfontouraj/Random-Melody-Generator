'use strict'

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
let numbersScale = []
let melodyScale = []
let melody = ""

const refNote = document.querySelector('.refnote').value
const scale = document.querySelector('.scale').value
const numberNotes = Number(document.querySelector('.number').value)


document.querySelector('.find').addEventListener('click', function(){
    const refNote = document.querySelector('.refnote').value
    const refNoteUper = refNote.toUpperCase()

    const scale = document.querySelector('.scale').value
    const numberNotes = Number(document.querySelector('.number').value)
    
    document.querySelector('.message').textContent = `Generating a melody in ${refNoteUper} ${scale} with ${numberNotes} notes`

    const refNoteIndex = Number(notes.indexOf(refNoteUper))
    function setMelodyScale(){
        
        melodyScale.push(notes[numbersScale[0]], notes[numbersScale[1]], notes[numbersScale[2]], notes[numbersScale[3]], notes[numbersScale[4]], notes[numbersScale[5]], notes[numbersScale[6]])
    }

    //hidde "scale" input if "Chromatic Scale" is on "refnote"

    if(scale === 'Chromatic Scale'){
        melodyScale = notes;
        console.log(melodyScale)
    } else if(scale === "Major"){
        numbersScale.push(refNoteIndex, refNoteIndex+2, refNoteIndex+4, refNoteIndex+5, refNoteIndex+7, refNoteIndex+9, refNoteIndex+11)
        setMelodyScale()
        console.log(melodyScale)
    } else if(scale === "Minor"){
        numbersScale.push(refNoteIndex, refNoteIndex+2, refNoteIndex+3, refNoteIndex+5, refNoteIndex+7, refNoteIndex+8, refNoteIndex+10)
        setMelodyScale()
        console.log(melodyScale)
    }
    

    for(let i=0; i<numberNotes; i++){
        let noteNumber = Math.trunc(Math.random()*6)+1
        melody = melody + " "+ melodyScale[noteNumber]
        console.log(noteNumber)
    }
    console.log(melody)

    document.querySelector('.display--melody').textContent = melody

    melody = ""
    melodyScale = []
})

