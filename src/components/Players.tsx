import * as React from 'react';
import styled from 'styled-components';

import { usePlayerContext } from '../providers/PlayerProvider';

import { LifeCounter } from './LifeCounter';

const StyledPlayers = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export function Players() {
  const { players } = usePlayerContext();

  return (
    <StyledPlayers>
      {players.map((player, idx) => <LifeCounter idx={idx} key={idx} lifeTotal={player} />)}
    </StyledPlayers>
  );
};
