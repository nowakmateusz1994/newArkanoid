class Game {
    constructor(lifes, points) {
        this.lifes = lifes;
        this.points = points;
    }

    changeLifes = () => {
        this.lifes--
    }

    changePoints = () => {
        this.points++
        console.log(`twój wynik to ${this.points}`)
    }
}