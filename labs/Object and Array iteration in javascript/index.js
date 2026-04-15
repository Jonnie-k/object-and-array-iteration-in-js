const gameObject = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: [
      {
        playerName: "Kevin Durant",
        points: 25,
        shoe: 15
      }
    ]
  },
  away: {
    teamName: "Golden State Warriors",
    colors: ["Blue", "Gold"],
    players: [
      {
        playerName: "Stephen Curry",
        points: 30,
        shoe: 13
      }
    ]
  }
};

//GET PLAYER POINTS
function numPointsScored(playerName) {
  const game = gameObject();

  for (let team in game) {
    const players = game[team].players;

    for (let player of players) {
      if (player.playerName === playerName) {
        return player.points;
      }
    }
  }
}

//GET SHOE SIZE
function shoeSize(playerName) {
  const game = gameObject();

  for (let team in game) {
    const players = game[team].players;

    for (let player of players) {
      if (player.playerName === playerName) {
        return player.shoe;
      }
    }
  }
}

//TEAM COLORS
function teamColors(teamName) {
  const game = gameObject();

  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}
//TEAM NAMES
function teamNames() {
  const game = gameObject();

  return Object.values(game).map(team => team.teamName);
}
//PLAYER NUMBERS
function playerNumbers(teamName) {
  const game = gameObject();

  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].players.map(player => player.number);
    }
  }
}
//PLAYER STATS
function playerStats(playerName) {
  const game = gameObject();

  for (let team in game) {
    for (let player of game[team].players) {
      if (player.playerName === playerName) {
        return player;
      }
    }
  }
}
//BIG SHOE REBOUND
function bigShoeRebounds() {
  const game = gameObject();

  let biggestShoe = 0;
  let rebounds = 0;

  for (let team in game) {
    for (let player of game[team].players) {
      if (player.shoe > biggestShoe) {
        biggestShoe = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }

  return rebounds;
}