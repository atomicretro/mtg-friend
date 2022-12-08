import * as React from 'react';
import styled from 'styled-components';

import { IChanceOptions } from './Options';

const StyledRoll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

interface IRollProps {
  whichOption: IChanceOptions;
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

  const [result, setResult] = React.useState(0);

  const minRoll = React.useMemo(() => 1, []);
  const maxRoll = React.useMemo(() => optionMap[whichOption], [whichOption]);
  const buttonText = React.useMemo(() => (
    whichOption === IChanceOptions.COIN ? 'Flip!' : 'Roll!'
  ), [whichOption]);

  const roll = React.useCallback(() => {
    const min = Math.ceil(minRoll);
    const max = Math.floor(maxRoll);
    setResult(Math.floor(Math.random() * (max - min + 1) + min));
  }, [minRoll, maxRoll, setResult]);

  const renderResult = () => {
    if (whichOption === IChanceOptions.COIN) {
      return result === 1 ? 'Heads' : 'Tails';
    }
    return result;
  };

  return (
    <StyledRoll>
      <h2>{whichOption}</h2>
      {renderResult()}
      <button onClick={roll} type='button'>{buttonText}</button>
    </StyledRoll>
  );
};
