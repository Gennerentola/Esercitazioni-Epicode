class SonAccount {
    balanceInit: number;
    constructor (_balanceInit:number = 0) {
        this.balanceInit = _balanceInit;
    }
    oneDeposit() {
        let partial: number = this.balanceInit + 100;
        this.oneWithDraw(partial);
    }
    oneWithDraw(oldPartial:number) {
        let partial: number = oldPartial - 25;
        this.twoDeposit(partial);
    }
    twoDeposit(oldPartial:number) {
        let partial: number = oldPartial +50;
        this.twoWithDraw(partial);
    }
    twoWithDraw(oldPartial:number) {
        let partial: number = oldPartial - 30;
        console.log(partial);
    }
}

class MotherAccount extends SonAccount {
    addInterest: number;
    constructor (balanceInit: number = 0, _addInterest:number = 1.1) {
        super(balanceInit);
        this.addInterest = _addInterest;
    }
    oneDeposit() {
        let partial: number = this.balanceInit + 200;
        this.oneWithDraw(partial);
    }
    oneWithDraw(oldPartial:number) {
        let partial: number = oldPartial - 55;
        this.twoDeposit(partial);
    }
    twoDeposit(oldPartial:number) {
        let partial: number = oldPartial +120;
        this.twoWithDraw(partial);
    }
    twoWithDraw(oldPartial:number) {
        let partial: number = oldPartial - 65;
        console.log(partial*this.addInterest)
    }
}

var son = new SonAccount();
son.oneDeposit();
var mom = new MotherAccount();
mom.oneDeposit();