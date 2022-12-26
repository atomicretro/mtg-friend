import * as React from 'react';

import { ChanceModal } from '../components/ChanceModal';

import { IChanceOptions } from 'src/types/IChance';

interface IChanceContext {
  whichChanceOption: IChanceOptions;
  setWhichChanceOption: (option: IChanceOptions) => void;
}

const ChanceContext = React.createContext<IChanceContext>({
  setWhichChanceOption: () => {},
  whichChanceOption: IChanceOptions.COIN,
});

export const ChanceProvider = () => {
  const [whichChanceOption, setWhichChanceOption] = React.useState(IChanceOptions.COIN);
  
  const value = {
    setWhichChanceOption,
    whichChanceOption,
  };

  return (
    <ChanceContext.Provider value={ value }>
      <ChanceModal />
    </ChanceContext.Provider>
  );
};

export const useChanceContext = () => React.useContext(ChanceContext);
