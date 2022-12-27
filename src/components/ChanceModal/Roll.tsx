import * as React from 'react';
import styled from 'styled-components';

import { useChanceContext } from 'src/providers/ChanceProvider';
import { Inputs } from './Inputs';
import { Results } from './Results';

import { EChanceOptions, TRolledObject } from 'src/types/IChance';

const StyledRoll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const maxRollMap = {
  [EChanceOptions.COIN]: 2,
  [EChanceOptions.D4]: 4,
  [EChanceOptions.D6]: 6,
  [EChanceOptions.D8]: 8,
  [EChanceOptions.D10]: 10,
  [EChanceOptions.D12]: 12,
  [EChanceOptions.D20]: 20,
};

export function Roll() {
  const { whichChanceOption } = useChanceContext();

  const [numToRoll, setNumToRoll] = React.useState(9);
  const [rolling, setRolling] = React.useState(false);
  const [results, setResults] = React.useState<TRolledObject[]>([]);

  const minRoll = React.useMemo(() => 1, []);
  const maxRoll = React.useMemo(() => maxRollMap[whichChanceOption], [whichChanceOption]);

  React.useEffect(() => {
    setResults([]);
  }, [whichChanceOption]);

  const roll = React.useCallback(() => {
    setRolling(true);
    const resultsArray: TRolledObject[] = [];
    for (let idx = 0; idx < numToRoll; idx++) {
      const min = Math.ceil(minRoll);
      const max = Math.floor(maxRoll);
      const theResult = Math.floor(Math.random() * (max - min + 1) + min);
      if (whichChanceOption === EChanceOptions.COIN) {
        resultsArray.push(theResult === 1 ? 'Heads' : 'Tails');
      } else {
        resultsArray.push(theResult);
      }
    }

    setTimeout(() =>{
      setResults(resultsArray);
      setRolling(false)
    }, 500);
  }, [whichChanceOption, numToRoll, minRoll, maxRoll, setResults, setRolling]);

  const decrementNum = React.useCallback(() => {
    if (numToRoll > 1) {
      setNumToRoll((prevNum) => prevNum - 1);
    }
  }, [numToRoll, setNumToRoll]);

  const incrementNum = React.useCallback(() => {
    if (numToRoll < 9) {
      setNumToRoll((prevNum) => prevNum + 1);
    }
  }, [numToRoll, setNumToRoll]);

  return (
    <StyledRoll>
      <h2>{whichChanceOption}</h2>

      <Results
        numToRoll={numToRoll}
        results={results}
        rolling={rolling}
      />

      <Inputs
        decrementNum={decrementNum}
        incrementNum={incrementNum}
        numToRoll={numToRoll}
        roll={roll}
        whichOption={whichChanceOption}
      />
    </StyledRoll>
  );
};
