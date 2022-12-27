import * as React from 'react';
import styled from 'styled-components';

import { RollButton } from '../Buttons/RollButton';
import { CrementButton } from '../Buttons/CrementButton';

import { EChanceOptions } from 'src/types/IChance';

const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px 10px 10px;

  .number-of {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;

interface IInputsProps {
  decrementNum: () => void;
  incrementNum: () => void;
  numToRoll: number;
  roll: () => void;
  whichOption: EChanceOptions;
}

export function Inputs(props: IInputsProps) {
  const {
    decrementNum,
    incrementNum,
    numToRoll,
    roll,
    whichOption,
  } = props;

  const buttonText = React.useMemo(() => (
    whichOption === EChanceOptions.COIN ? 'Flip!' : 'Roll!'
  ), [whichOption]);

  const renderNumToRoll = () => {
    let object = '';
    if (whichOption === EChanceOptions.COIN) {
      object = numToRoll === 1 ? 'coin' : 'coins';
    } else {
      object = numToRoll === 1 ? 'die' : 'dice';
    }
    return `${numToRoll} ${object}`;
  };

  return (
    <StyledInputs>
      <RollButton onClick={roll}>
        <span>{buttonText}</span>
      </RollButton>

      <div className='number-of'>
        <CrementButton onClick={decrementNum} size='small' type='decrement' />
        <span>{renderNumToRoll()}</span>
        <CrementButton onClick={incrementNum} size='small' type='increment' />
      </div>
    </StyledInputs>
  );
};
