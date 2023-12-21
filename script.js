const perfectLineDist = 125
const FPS = 60

let notes = {
    0: [],
    1: [],
    2: [],
    3: [],
}

const noteRows = 4
const noteSpawnRate = 1 * FPS
let noteCountdown = 5

let score = 0


function setup(){
    createCanvas(800, 700)
    frameRate(FPS)
    rectMode(CENTER);

    // let n = new Note(width/2)
    // notes.push(n)
    
}

function draw(){
    background(0)

    stroke(255)
    fill(0)
    line(0, height-perfectLineDist, width, height-perfectLineDist)
    for(let i = 0; i < noteRows; i++){
        let lineX = width/(noteRows+1)*(i+1)
        line(lineX, 0, lineX, height)
        circle(lineX, height-perfectLineDist, NOTE_SIZE)
    }

    fill("pink")
    circle(160, height-perfectLineDist-30 , 60)
    
    stroke(0)
    noteCountdown --
    if(noteCountdown == 0){
        let rand = Math.floor(Math.random()*noteRows)
        let n = new Note(rand)
        notes[rand].push(n)
        noteCountdown = noteSpawnRate
    }

    for(let i = 0; i < noteRows; i++){
        for(let a = 0; a < notes[i].length; a++){
            notes[i][a].update()
            notes[i][a].draw()
            if(notes[i][a].outOfBounds()){
                notes[i].splice(a, 1)
            }
        }
    }
    
    noFill()
    stroke(255)
    for(let i = 0; i < noteRows; i++){
        let lineX = width/(noteRows+1)*(i+1)
        circle(lineX, height-perfectLineDist, NOTE_SIZE)
    }
    


}

let keys = ["a", "s", "d", "f"]
function keyPressed(){
    for(let i = 0; i < noteRows; i++){
        if(key == keys[i]){
            console.log(key + ": " + distFrom(notes[i][0]))
            notes[i].splice(0, 1)
        }
    }
}

function distFrom(note){
    let perfectHeight = height - perfectLineDist
    scoring(Math.abs(perfectHeight - note.y))
}

let scoreVals = {
    perfect: 50,
    great: 40,
    good: 30,
    ok: 20,
    meh: 10,
}
 
function scoring(dist){
    if(dist <= 5){
        score += scoreVals.perfect
    }else if(dist <= 10){
        score += scoreVals.great
    }else if(dist <= 15){
        score += scoreVals.good
    }else if(dist <= 25){
        score += scoreVals.ok
    }else if(dist <= 40){
        score += scoreVals.meh

    }
}