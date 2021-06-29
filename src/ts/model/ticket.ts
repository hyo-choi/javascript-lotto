class Ticket {
  numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  getGameResult(result: number[], bonus: number): number {
    // eslint-disable-next-line arrow-body-style
    const num: number = this.numbers.reduce((acc, cur) => {
      return result.includes(cur) ? acc + 1 : acc;
    }, 0);
    switch (num) {
      case 6: return 1;
      case 5:
        if (this.numbers.includes(bonus)) {
          return 2;
        }
        return 3;
      case 4: return 4;
      case 3: return 5;
      default: return 0;
    }
  }
}

export default Ticket;
