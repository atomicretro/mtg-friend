import * as React from 'react';

import { ChanceModal } from '../components/ChanceModal';

import { EChanceOptions } from 'src/types/IChance';

interface IChanceContext {
  whichChanceOption: EChanceOptions;
  setWhichChanceOption: (option: EChanceOptions) => void;
}

const ChanceContext = React.createContext<IChanceContext>({
  setWhichChanceOption: () => {},
  whichChanceOption: EChanceOptions.COIN,
});

export const ChanceProvider = () => {
  const [whichChanceOption, setWhichChanceOption] = React.useState(EChanceOptions.COIN);
  
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
