import * as React from 'react';
import styled from 'styled-components';

import { useConfigContext } from '../providers/ConfigProvider';
import { usePlayerContext } from '../providers/PlayerProvider';

import { LifeCounter } from './LifeCounter';
import { PlayersConfig } from './PlayersConfig';

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
  const { p1Flipped } = useConfigContext();
  const { players } = usePlayerContext();

  const totalPlayers = React.useMemo(() => players.length, [players]);
  const lifeCounters = React.useMemo(() => (
    players.map((player, idx) => {
      let order;
      if (totalPlayers > 2 || (totalPlayers === 2 && idx === 0)) {
        order = idx + 1;
      } else {
        order = 3;
      }

      return (
        <LifeCounter
          flipped={idx === 0 && p1Flipped}
          idx={idx}
          key={idx}
          lifeTotal={player}
          order={order}
        />
      );
    })
  ), [p1Flipped, players, totalPlayers]);

  return (
    <StyledPlayers>
      {lifeCounters}
      <PlayersConfig order={totalPlayers > 2 ? totalPlayers : 2} />
    </StyledPlayers>
  );
};
