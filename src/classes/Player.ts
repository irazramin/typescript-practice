import { Isplayer } from '../interface/IsPlayer';
export class Player implements Isplayer {
  //   private name: string;
  //   private age: number;
  //   readonly country: string;
  //interface e private modifer sorasori deya jay na. tai getter method use kore property private korte pari amra
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  play() {
    console.log(
      `Name : ${this.name} Age : ${this.age} Country : ${this.country}`
    );
  }
  getAgeProperty() {
    return this.age;
  }
}
