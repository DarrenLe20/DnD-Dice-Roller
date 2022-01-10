class Dice {
  constructor(side) {
    this.side = side;
  }

  roll() {
    let res = 0;
    switch (this.side) {
      case "20":
        res = Math.floor(Math.random() * 20) + 1;
        return res;
      case "12":
        res = Math.floor(Math.random() * 12) + 1;
        return res;
      case "10":
        res = Math.floor(Math.random() * 10);
        return res;
      case "8":
        res = Math.floor(Math.random() * 8) + 1;
        return res;
      case "6":
        res = Math.floor(Math.random() * 6) + 1;
        return res;
      case "4":
        res = Math.floor(Math.random() * 4) + 1;
        return res;
      default:
        console.log("Default");
        break;
    }
  }

  getSide() {
    return this.side;
  }

  setSide(side) {
    this.side = side;
  }
}

export default Dice;
