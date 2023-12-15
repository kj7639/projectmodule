const NOTE_SIZE = 40

class Note{
    constructor(x){
        this.x = x
        this.y = 0
        this.diameter = NOTE_SIZE
        this.radius = this.diameter/2
        this.speed = 2
        this.colour = "#FFFFFF"
    }
    draw(){
        // fill(this.colour)
        // rect(this.x, this.y, this.length, this.length)
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