import * as React from 'react';

interface IPlayerContext {}

const PlayerContext = React.createContext<IPlayerContext>({});

interface IProps {
  children: React.ReactNode;
}

export const PlayerProvider = ({ children }: IProps) => {
  const value = {};

  return (
    <PlayerContext.Provider value={ value }>
      { children }
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => React.useContext(PlayerContext);
