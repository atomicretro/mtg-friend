import * as React from 'react';
import styled from 'styled-components';

import { usePlayerContext } from 'src/providers/PlayerProvider';

import { LifeButton } from 'src/components/Buttons/LifeButton';

const StyledLifeCounter = styled.li<{ flipped?: boolean, numPlayers: number, order: number }>`
  display: flex;
  flex-direction: row;
  flex-grow: 3;
  order: ${({ order }) => order};
  font-family: 'Noto Sans Mono', monospace;
  user-select: none;
  border: ${({ numPlayers }) => {
    if (2 <= numPlayers && numPlayers <= 4) { return '6px solid #000000'; }
    if (5 <= numPlayers && numPlayers <= 7) { return '4px solid #000000'; }
    if (8 <= numPlayers && numPlayers <= 9) { return '2px solid #000000'; }
  }};
  border-radius: ${({ numPlayers }) => {
    if (2 <= numPlayers && numPlayers <= 4) { return '24px'; }
    if (5 <= numPlayers && numPlayers <= 7) { return '20px'; }
    if (8 <= numPlayers && numPlayers <= 9) { return '18px'; }
  }};
  ${({ flipped }) => flipped && 'rotate: 180deg;'};

  .player-info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 3;

    .life {
      font-size: ${({ numPlayers }) => {
        if (2 <= numPlayers && numPlayers <= 3) { return '60px'; }
        if (numPlayers === 4) { return '50px'; }
        if (numPlayers === 5) { return '40px'; }
        if (numPlayers === 6) { return '35px'; }
        if (numPlayers === 7) { return '24px'; }
        if (numPlayers === 8) { return '18px'; }
        if (numPlayers === 9) { return '16px'; }
      }};
    }

    .name {
      font-size: ${({ numPlayers }) => {
        if (2 <= numPlayers && numPlayers <= 4) { return '20px'; }
        if (5 <= numPlayers && numPlayers <= 6) { return '16px'; }
        if (7 <= numPlayers && numPlayers <= 8) { return '12px'; }
        if (numPlayers === 9) { return '10px'; }
      }};
    }
  }
`;

interface ILifeCounterProps {
  flipped?: boolean;
  idx: number;
  lifeTotal: number;
  order: number;
}

export function LifeCounter(props: ILifeCounterProps) {
  const { flipped, idx, lifeTotal, order } = props;
  const { decrementLifeTotal, numberOfPlayers, incrementLifeTotal } = usePlayerContext();

  return (
    <StyledLifeCounter flipped={flipped} numPlayers={numberOfPlayers} order={order}>
      <LifeButton numPlayers={numberOfPlayers} onClick={() => decrementLifeTotal(idx)} type='decrement' />
      <div className='player-info'>
        <span className='life'>{lifeTotal}</span>
        <span className='name'>Player {idx + 1}</span>
      </div>
      <LifeButton numPlayers={numberOfPlayers} onClick={() => incrementLifeTotal(idx)} type='increment' />
    </StyledLifeCounter>
  );
};
