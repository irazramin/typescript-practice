var Player = /** @class */ (function () {
    //   private name: string;
    //   private age: number;
    //   readonly country: string;
    //interface e private modifer sorasori deya jay na. tai getter method use kore property private korte pari amra
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log("Name : " + this.name + " Age : " + this.age + " Country : " + this.country);
    };
    Player.prototype.getAgeProperty = function () {
        return this.age;
    };
    return Player;
}());
export { Player };
