export class Match {
    constructor (
        public playerOneId: string,
        public playerTwoId: string,
        public sets: Set[],
        public playerWonId: string
     ) {}
}

export class Set {
    constructor (
        public playerOneScore: number,
        public playerTwoScore: number
    ) {}
}