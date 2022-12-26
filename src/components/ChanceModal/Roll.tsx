import * as React from 'react';
import styled from 'styled-components';

import { useChanceContext } from 'src/providers/ChanceProvider';
import { Inputs } from './Inputs';
import { Results } from './Results';

import { IChanceOptions } from 'src/types/IChance';

const StyledRoll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const maxRollMap = {
  [IChanceOptions.COIN]: 2,
  [IChanceOptions.D4]: 4,
  [IChanceOptions.D6]: 6,
  [IChanceOptions.D8]: 8,
  [IChanceOptions.D10]: 10,
  [IChanceOptions.D12]: 12,
  [IChanceOptions.D20]: 20,
};

export function Roll() {
  const { whichChanceOption } = useChanceContext();

  const [numToRoll, setNumToRoll] = React.useState(1);
  const [rolling, setRolling] = React.useState(false);
  const [results, setResults] = React.useState<(number | 'Heads' | 'Tails')[]>([]);

  const minRoll = React.useMemo(() => 1, []);
  const maxRoll = React.useMemo(() => maxRollMap[whichChanceOption], [whichChanceOption]);

  React.useEffect(() => {
    setResults([]);
  }, [whichChanceOption]);

  const roll = React.useCallback(() => {
    setRolling(true);
    const resultsArray: (number | 'Heads' | 'Tails')[] = [];
    for (let idx = 0; idx < numToRoll; idx++) {
      const min = Math.ceil(minRoll);
      const max = Math.floor(maxRoll);
      const theResult = Math.floor(Math.random() * (max - min + 1) + min);
      if (whichChanceOption === IChanceOptions.COIN) {
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
