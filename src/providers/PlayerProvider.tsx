import * as React from 'react';

interface IPlayerContext {
  players: number[];
  decrementLifeTotal: (idx: number) => void;
  incrementLifeTotal: (idx: number) => void;
}

const PlayerContext = React.createContext<IPlayerContext>({
  players: [],
  decrementLifeTotal: () => {},
  incrementLifeTotal: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const getInitialState = () => {
  const players = localStorage.getItem('players');
  return players ? JSON.parse(players) : [20, 20];
};

export const PlayerProvider = ({ children }: IProps) => {
  const [players, setPlayers] = React.useState(getInitialState);

  const setPlayersState = (players: number[]) => {
    localStorage.setItem('players', JSON.stringify(players));
    setPlayers(players);
  };

  React.useEffect(() => { setPlayersState(players); }, [players]);

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

  const value = {
    decrementLifeTotal,
    incrementLifeTotal,
    players,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => React.useContext(PlayerContext);
