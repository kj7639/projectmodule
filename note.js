const NOTE_SIZE = 60
let noteColours = ["#00FF00", "#FF0000", "#FFFF00", "#0000FF"]


class Note{
    constructor(row,){
        this.row =  row
        this.x = width/(noteRows + 1) * (this.row+1)
        this.y = 0
        this.diameter = NOTE_SIZE
        this.radius = this.diameter/2
        this.speed = 2
        this.colour = noteColours[this.row]
    }
    draw(){
        fill(this.colour)
        circle(this.x, this.y, this.diameter)
    }
    update(){
        this.y += this.speed
    }
    outOfBounds(){
        if(this.y - this.radius >= height){
            return true
        }else{
            return false
        }
    }
}