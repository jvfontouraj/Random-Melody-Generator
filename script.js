'use strict'

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"] //array with every music note
let numbersScale = [] //array to store the numbers that matches with the note position on the "notes" array (according to the "refNote" )
let melodyScale = [] //array with the notes of the "refNote" scale
let melody = "" //string to output the sorted melody

// hidde "scale" input if "Chromatic Scale" is on "refnote" and get back if other item is select
document.querySelector('.scale').addEventListener('change', function(){
    const scale = document.querySelector('.scale').value
    scale === 'Chromatic Scale' ?
    document.querySelector('.hidden').style.display = "none" :
    document.querySelector('.hidden').style.display = "inherit"
})

document.querySelector('.find').addEventListener('click', function(){
    const refNote = document.querySelector('.refnote').value //get the input value of -Reference Note- field
    const scale = document.querySelector('.scale').value //get the input value of -Scale- field
    const numberNotes = Number(document.querySelector('.number').value) //get the input value of -Number of Notes- field and turn into a number
    const refNoteIndex = Number(notes.indexOf(refNote)) //find the index (position) of the refence note in the "notes" array
    document.querySelector('.message').textContent = "" //set the .message to a empty string
    document.querySelector('.display--melody').textContent = "" //set the .display--melody to a empty string

    //set the melody scale array and display a message that the program is running with the inputs
    function setMelodyScale(){
        //display the following message, adding the string to the .message class on html file
        document.querySelector('.message').textContent = `Generating a melody in ${refNote} ${scale} with ${numberNotes} notes`

        //for(let i=0;i<=numbersScale.length;i++){        // getting the index (let i) and checking if is above 11 (final index of "notes" array)
        for (const [i, el] of numbersScale.entries()){    // can do with "for loop" or "for-of loop", both works the same
            if(numbersScale[i]>11){
                numbersScale[i] -= 11
            }
            melodyScale.push(notes[numbersScale[i]]) //match the Number Scale to the index of the Notes array to create the Melody Scale        
    }}

    //set a random melody based on the Number of Notes and the Melody Scale
    function setMelody(){
        for(let i=0; i<numberNotes; i++){                   // a loop to choose the random numbers according to the Number of Notes
        let noteNumber = Math.trunc(Math.random()*7)        // generate a number betwen 0 and 6 (7 numbers in total, for each note on the scale)
        melody = melody + " "+ melodyScale[noteNumber]      // 
        }
        document.querySelector('.display--melody').textContent = melody
    }

    //for some reason "numberNotes" behave strange and don't obey the if statement below
    if(refNote && numberNotes  && scale){ //Execute the functions if the inputs are true/valid
        if(scale === "Chromatic Scale"){
            document.querySelector('.message').textContent = `Generating a melody in Chromatic Scale`
            melodyScale = notes;
            setMelody()
        } 
        else if(scale === "Major"){
            numbersScale.push(refNoteIndex, refNoteIndex+2, refNoteIndex+4, refNoteIndex+5, refNoteIndex+7, refNoteIndex+9, refNoteIndex+11)
            setMelodyScale()
            setMelody()
        } 
        else if(scale === "Minor"){
            numbersScale.push(refNoteIndex, refNoteIndex+2, refNoteIndex+3, refNoteIndex+5, refNoteIndex+7, refNoteIndex+8, refNoteIndex+10)
            setMelodyScale()
            setMelody()
        }

    } else{
        document.querySelector('.message').textContent = 'Choose a valid input'
    }

    melody = ""
    melodyScale = []
    numbersScale = []
})

