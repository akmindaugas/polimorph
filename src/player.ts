// [9:54 AM] Robertas Ankudovičius
//     OOP3 POLYMORPHISM & INTERFACES
// 1.Sukurti klases Player,  VideoPlayer, AudioPlayer;
// 2. VideoPlayer ir AudioPlayer turi paveldėt Player;
// 3. Player turi turėt savybes: "brand", "releaseYear", metodą "play()"
// 4. Tiek VideoPlayer ir AudioPlayer turi turėt tą patį play() metodą, tik vygdyti skirtingus veiksmus( tiesiog printint skirtingus logus );
// /////// next task
// 5. Sukurti interface IDrivable, kuris turi turėt metodą drive()
// 6.  Sukurti interface IRefuelable  kuris turi turėt metodą refuel(amount)
// 7. Sukurti Bicycle klasę, kuri turi implementuoją IDrivable interface, bei turi papildomą metodą lock();
// 8. Sukurti Car klasę, kuri turi implementuoją IDrivable ir IRefuelable interface'us , bei turi papildomą metodą lock();
// 9. Car turi turėt papildomą savybę "isParked";
// 10. Car turi turėt papildomą metodą park(), kai jis yra iškviečiamas "isParked" turi tapt true;
// 11. Car turi turėt papildomą metodą leaveParking(), kai jis yra iškviečiamas "isParked" turi tapt false;
// 12. Car pridėt metodą displayParkingStatus. Metodas turi į console išvesti skirtingas žinutes.

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
