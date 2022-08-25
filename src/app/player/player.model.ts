export class Player {
    constructor (
        public name: string,
        public id: string,
        public setsWon: number,
        public matchesWon: number
     ) {}
}

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
        public playerTwoScore: number,
        public playerWonId: string
    ) {}
}
