"use strict";
console.log("veikia player");
class Player {
    play() {
        console.log("play");
    }
    constructor(brand, relaseYear) {
        this.brand = brand;
        this.relaseYear = relaseYear;
    }
}
class VideoPLayer extends Player {
    play() {
        console.log("play video");
    }
}
class AudioPlayer extends Player {
    play() {
        console.log("play audio");
    }
}
//  check method works(create player with 'new' )
const myAudioPlayer = new AudioPlayer("Sony", 1984);
myAudioPlayer.play();
