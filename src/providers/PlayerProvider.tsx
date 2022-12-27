import * as React from 'react';

interface IPlayerContext {
  addPlayer: () => void;
  decrementLifeTotal: (idx: number) => void;
  incrementLifeTotal: (idx: number) => void;
  numberOfPlayers: number;
  players: number[];
  removePlayer: () => void;
  resetAllLifeTotals: () => void;
}

const PlayerContext = React.createContext<IPlayerContext>({
  addPlayer: () => {},
  decrementLifeTotal: () => {},
  incrementLifeTotal: () => {},
  numberOfPlayers: 2,
  players: [],
  removePlayer: () => {},
  resetAllLifeTotals: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const getInitialState = <T extends unknown>(property: string, defaultValue: T): T => {
  const data = localStorage.getItem(property);
  return data ? JSON.parse(data) : defaultValue;
};

export const PlayerProvider = ({ children }: IProps) => {
  const [players, setPlayers] = React.useState(getInitialState<number[]>('players', [20, 20]));

  const setPlayersState = (players: number[]) => {
    localStorage.setItem('players', JSON.stringify(players));
    setPlayers(players);
  };

  React.useEffect(() => { setPlayersState(players); }, [players]);

  const numberOfPlayers = React.useMemo(() => players.length, [players.length]);

  const addPlayer = () => {
    if (numberOfPlayers < 9) {
      setPlayersState(players.concat([20]));
    }
  };

  const removePlayer = () => {
    if (numberOfPlayers > 2) {
      setPlayersState(players.slice(0, -1));
    }
  };

  const incrementLifeTotal = (idx: number) => {
    const nextPlayers = [...players];
    nextPlayers[idx] += 1;
    setPlayersState(nextPlayers);
  };

  const decrementLifeTotal = (idx: number) => {
    const nextPlayers = [...players];
    nextPlayers[idx] -= 1;
    setPlayersState(nextPlayers);
  };

  const resetAllLifeTotals = () => {
    setPlayersState(players.map(() => 20));
  };

  const value = {
    addPlayer,
    decrementLifeTotal,
    incrementLifeTotal,
    numberOfPlayers,
    players,
    removePlayer,
    resetAllLifeTotals,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => React.useContext(PlayerContext);
