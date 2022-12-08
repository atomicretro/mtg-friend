import * as React from 'react';
import styled from 'styled-components';

import { IChanceOptions } from './Options';
import { Inputs } from './Inputs';
import { Results } from './Results';

const StyledRoll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

interface IRollProps {
  whichOption: IChanceOptions;
}

export enum RollType {
  BLANK = '',
  COIN = 'coin',
  DIE = 'die',
}

const optionMap = {
  [IChanceOptions.COIN]: 2,
  [IChanceOptions.D4]: 4,
  [IChanceOptions.D6]: 6,
  [IChanceOptions.D8]: 8,
  [IChanceOptions.D10]: 10,
  [IChanceOptions.D12]: 12,
  [IChanceOptions.D20]: 20,
};

export function Roll(props: IRollProps) {
  const { whichOption } = props;

  const [rollType, setRollType] = React.useState<RollType>(RollType.BLANK);
  const [numToRoll, setNumToRoll] = React.useState(1);
  const [rolling, setRolling] = React.useState(false);
  const [results, setResults] = React.useState<number[]>([]);

  const minRoll = React.useMemo(() => 1, []);
  const maxRoll = React.useMemo(() => optionMap[whichOption], [whichOption]);

  React.useEffect(() => {
    setResults([]);
  }, [whichOption]);

  React.useEffect(() => {
    if (whichOption === IChanceOptions.COIN) {
      setRollType(RollType.COIN);
    } else {
      setRollType(RollType.DIE);
    }
  }, [whichOption]);

  const roll = React.useCallback(() => {
    setRolling(true);
    const resultsArray: number[] = [];
    for (let idx = 0; idx < numToRoll; idx++) {
      const min = Math.ceil(minRoll);
      const max = Math.floor(maxRoll);
      resultsArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    setTimeout(() =>{
      setResults(resultsArray);
      setRolling(false)
    }, 500);
  }, [numToRoll, minRoll, maxRoll, setResults, setRolling]);

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
      <h2>{whichOption}</h2>

      <Results
        results={results}
        rolling={rolling}
        rollType={rollType}
      />

      <Inputs
        decrementNum={decrementNum}
        incrementNum={incrementNum}
        numToRoll={numToRoll}
        roll={roll}
        whichOption={whichOption}
      />
    </StyledRoll>
  );
};
