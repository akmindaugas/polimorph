console.log("veikia player");

class Player {
  brand: string;
  relaseYear: number;

  play(): void {
    console.log("play");
  }
  constructor(brand: string, relaseYear: number) {
    this.brand = brand;
    this.relaseYear = relaseYear;
  }
}

class VideoPLayer extends Player {
  play(): void {
    console.log("play video");
  }
}

class AudioPlayer extends Player {
  play(): void {
    console.log("play audio");
  }
}
//  check method works(create player with 'new' )
const myAudioPlayer = new AudioPlayer("Sony", 1984);
myAudioPlayer.play();
