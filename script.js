const FPS = 60
let game = true
let started = true
// const gameLength = 60 * FPS
// let timeLeft = gameLength

const perfectLineDist = 125

let notes = {
    0: [],
    1: [],
    2: [],
    3: [],
}

let number = prompt("Pick how many rows you want (3 or 4)")
let noteRows = parseInt(number)
let noteSpawnRate = 2 * FPS
let noteCountdown = 5

let score = 0


function setup(){
    createCanvas(800, 700)
    frameRate(FPS)
    rectMode(CENTER);
    textAlign(CENTER, CENTER)
}

// let buttons = []
// let options = [3,4,5]

// for(let i = 0; i < 3; i++){
//     let x = ((width/5 * 3)/3)*(i+1.5)
//     // let y = height/5 * 2.5
//     let b = new Button(x, y, options[i])
//     buttons.push(b)
//     // fill(255)
//     // rect(x, height/5 * 2.5, 120, 25)
//     // fill(0)
//     // text("yee-haw", x, height/5 * 2.5)
//     // fill(255)
//     // rect(x, height/5 * 3, 120, 25)
//     // fill(0)
//     // text("howdy", x, height/5 * 3)

// }
// let number = prompt("Pick how many rows you want (3-5")
function draw(){
    background(0)

    
    if(started == false){
        // fill("#055be6")
        // rect(width/2, height/2, width/3 *2, height/2)
        // for(let i = 0; i < buttons.length; i++){
        //     fill(255)
        //     buttons[i].draw()
        // }

    }else{
        strokeWeight(1)
        textSize(30)
        text(score, 30, 50)
        
    }

    if(game == true){
        // timeLeft --
        // if(timeLeft == 0){
        //     game = false
        // }

        strokeWeight(4)
        stroke(255)
        fill(0)
        line(0, height-perfectLineDist, width, height-perfectLineDist)
        for(let i = 0; i < noteRows; i++){
            let lineX = width/(noteRows+1)*(i+1)
            line(lineX, 0, lineX, height)
            circle(lineX, height-perfectLineDist, NOTE_SIZE)
        }

        // fill("pink")
        // circle(160, height-perfectLineDist-30 , 60)
        
        strokeWeight(0)
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
    if(score >= 2000){
        noteSpawnRate = 0.5 * FPS
    }else if(score >= 1000){
        noteSpawnRate = FPS
    }else if(score >= 500){
        noteSpawnRate = 1.5 * FPS
    }

}

let keys = ["a", "s", "d", "f", "g"]
function keyPressed(){
    for(let i = 0; i < noteRows; i++){
        if(key == keys[i]){
            distFrom(notes[i][0])
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