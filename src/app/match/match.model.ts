// Match object is storing only player ids, not the whole Player object. If the whole Player object was stored, we would get incorrect data about the player
// current stats (player could have won more matches and sets in the meantime). This way we search the 'database' with the id and get current player stats.
export class Match {
    constructor (
        public id: string,
        public playerOneId: string,
        public playerTwoId: string,
        public sets: Array<Array<number>>,
        public playerWonId: string
     ) {}
}

