const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  set players(player) {
    this.players.push(player);
  },
  set games(game) {
    this._games.push(game);
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age,
    };
    //this.players.push(player); //add direct
    this.players = player; //add with setter()
  },
  addGame(opp, teamPoints, opponentPoints) {
    const game = {
      opp,
      teamPoints,
      opponentPoints,
    };
    this.games.push(game); //this.games is fetched as a getter()
  },
};

team.addPlayer("Steph", "Curry", "28");
team.addPlayer("Lisa", "Leslie", "44");
team.addPlayer("Bugs", "Bunny", "76");
team.addGame("Titans", 100, 98);

console.log(team);
