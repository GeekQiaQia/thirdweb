// Latest started game (from GameStarted events)
export function FETCH_LATEST_GAME() {
  return `query LatestGame {
    gameStarteds(orderBy: gameId, orderDirection: desc, first: 1) {
      gameId
      maxPlayers
      entryFee
    }
  }`;
}

// Players joined for a specific gameId
export function FETCH_PLAYERS_FOR_GAME(gameId: string | number) {
  return `query PlayersForGame {
    playerJoineds(
      where: { gameId: ${typeof gameId === "number" ? gameId : gameId} }
      orderBy: blockTimestamp
      orderDirection: asc
    ) {
      player
    }
  }`;
}

// Winner for a specific gameId (if ended)
export function FETCH_WINNER_FOR_GAME(gameId: string | number) {
  return `query WinnerForGame {
    gameEndeds(
      where: { gameId: ${typeof gameId === "number" ? gameId : gameId} }
      orderBy: blockTimestamp
      orderDirection: desc
      first: 1
    ) {
      winner
    }
  }`;
}