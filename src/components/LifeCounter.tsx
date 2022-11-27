import * as React from 'react';
import styled from 'styled-components';

import { usePlayerContext } from '../providers/PlayerProvider';

import { LifeButton } from './Buttons/LifeButton';

const StyledLifeCounter = styled.li`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  font-family: 'Noto Sans Mono', monospace;
  user-select: none;
  border: 6px solid #000000;
  border-radius: 24px;
  margin: 36px 10px;

  .life-total {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
    font-size: 60px;
  } 
`;

interface ILifeCounterProps {
  idx: number;
  lifeTotal: number;
}

export function LifeCounter(props: ILifeCounterProps) {
  const { idx, lifeTotal } = props;
  const { decrementLifeTotal, incrementLifeTotal } = usePlayerContext();

  return (
    <StyledLifeCounter>
      <LifeButton onClick={() => decrementLifeTotal(idx)} type='decrement' />
      <div className='life-total'>{lifeTotal}</div>
      <LifeButton onClick={() => incrementLifeTotal(idx)} type='increment' />
    </StyledLifeCounter>
  );
};
