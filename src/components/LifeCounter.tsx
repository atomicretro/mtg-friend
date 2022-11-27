import * as React from 'react';
import styled from 'styled-components';

import { usePlayerContext } from '../providers/PlayerProvider';

import { LifeButton } from './Buttons/LifeButton';


const StyledLifeCounter = styled.li<{ order: number }>`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  order: ${({ order }) => order};
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
  order: number;
}

export function LifeCounter(props: ILifeCounterProps) {
  const { idx, lifeTotal, order } = props;
  const { decrementLifeTotal, incrementLifeTotal } = usePlayerContext();

  return (
    <StyledLifeCounter order={order}>
      <LifeButton onClick={() => decrementLifeTotal(idx)} type='decrement' />
      <div className='life-total'>{lifeTotal}</div>
      <LifeButton onClick={() => incrementLifeTotal(idx)} type='increment' />
    </StyledLifeCounter>
  );
};
