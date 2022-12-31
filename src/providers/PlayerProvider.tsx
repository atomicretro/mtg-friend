import * as React from 'react';

export type TPlayer = {
  name: string;
  life: number;
};

const generatePlayer = (idx: number): TPlayer => ({
  name: `Player ${idx}`,
  life: 20,
});

const generateInitialPlayers = (): TPlayer[] => {
  const players = [];
  for (let idx = 1; idx < 10; idx++) {
    players.push(generatePlayer(idx));
  }
  return players;
};

interface IPlayerContext {
  addPlayer: () => void;
  decrementLifeTotal: (idx: number) => void;
  incrementLifeTotal: (idx: number) => void;
  numberOfPlayers: number;
  players: TPlayer[];
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
  if (data === null) {
    localStorage.setItem(property, JSON.stringify(defaultValue));
    return defaultValue;
  }
  return JSON.parse(data);
};

export const PlayerProvider = ({ children }: IProps) => {
  const [players, setPlayers] = React.useState(getInitialState<TPlayer[]>('allPlayers', generateInitialPlayers()));
  const [numPlayers, setNumPlayers] = React.useState(getInitialState<number>('numPlayers', 2));

  const addPlayer = () => {
    if (numPlayers < 9) {
      localStorage.setItem('numPlayers', JSON.stringify(numPlayers + 1));
      setNumPlayers(numPlayers + 1);
    }
  };

  const removePlayer = () => {
    if (numPlayers > 2) {
      localStorage.setItem('numPlayers', JSON.stringify(numPlayers - 1));
      setNumPlayers(numPlayers - 1);
    }
  };

  const incrementLifeTotal = (idx: number) => {
    const nextPlayers = [...players];
    nextPlayers[idx].life += 1;
    localStorage.setItem('allPlayers', JSON.stringify(nextPlayers));
    setPlayers(nextPlayers);
  };

  const decrementLifeTotal = (idx: number) => {
    const nextPlayers = [...players];
    nextPlayers[idx].life -= 1;
    localStorage.setItem('allPlayers', JSON.stringify(nextPlayers));
    setPlayers(nextPlayers);
  };
  
  const resetAllLifeTotals = () => {
    const nextPlayers = players.map((player: TPlayer) => ({ ...player, life: 20}))
    localStorage.setItem('allPlayers', JSON.stringify(nextPlayers));
    setPlayers(nextPlayers);
  };

  const value = {
    addPlayer,
    decrementLifeTotal,
    incrementLifeTotal,
    numberOfPlayers: numPlayers,
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
