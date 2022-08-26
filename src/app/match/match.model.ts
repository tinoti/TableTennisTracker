export class Match {
    constructor (
        public id: string,
        public playerOneId: string,
        public playerTwoId: string,
        public sets: Array<Array<number>>,
        public playerWonId: string
     ) {}
}

