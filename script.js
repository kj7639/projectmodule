const perfectLineDist = 125
const FPS = 60

let notes = {
    0: [],
    1: [],
    2: [],
    3: [],
}
let colours = ["#00FF00", "#FF0000", "#FFFF00", "#0000FF"]
const noteSpawnRate = 10 * FPS
let noteCountdown = 5

let noteRows = 2


function setup(){
    createCanvas(800, 700)
    frameRate(FPS)
    rectMode(CENTER);

    // let n = new Note(width/2)
    // notes.push(n)
    
}
function draw(){
    background(0)
    
    noteCountdown --
    if(noteCountdown == 0){
        let rand = Math.floor(Math.random()*noteRows)
        console.log(rand)
        let n = new Note(width/noteRows/2*(noteRows+1))
        
        console.log("new note")
        noteCountdown = noteSpawnRate
    }


    for(let i = 0; i < notesA.length; i++){
        fill("#FF0000")
        notesA[i].update()
        notesA[i].draw()
        if(notesA[i].outOfBounds()){
            notesA.splice(i, 1)
        }
    }
    

    fill(255)
    rect(width/2, height-perfectLineDist, width, 2)



}

function keyPressed(){
    if(key == " "){
        console.log((height-perfectLineDist-notes[0].y))
    }
}

