class Ticket {
    constructor(numbers) {
        this.numbers = Array.from(numbers);
    }
    getGameResult(result, bonus) {
        // eslint-disable-next-line arrow-body-style
        const num = this.numbers.reduce((acc, cur) => {
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
