import * as React from 'react';
import styled from 'styled-components';

import { RollButton } from '../Buttons/RollButton';
import { SmallCrementButton } from '../Buttons/SmallCrementButton';

import { IChanceOptions } from 'src/types/IChance';

const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
  whichOption: IChanceOptions;
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
    whichOption === IChanceOptions.COIN ? 'Flip!' : 'Roll!'
  ), [whichOption]);

  const renderNumToRoll = () => {
    let object = '';
    if (whichOption === IChanceOptions.COIN) {
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
        <SmallCrementButton type='decrement' onClick={decrementNum} />
        <span>{renderNumToRoll()}</span>
        <SmallCrementButton type='increment' onClick={incrementNum} />
      </div>
    </StyledInputs>
  );
};
