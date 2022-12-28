import * as React from 'react';
import styled from 'styled-components';

import { useConfigContext } from 'src/providers/ConfigProvider';
import { usePlayerContext } from 'src/providers/PlayerProvider';

import { LifeCounter } from './LifeCounter';
import { QuickConfig } from './QuickConfig';

const StyledPlayers = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export function Players() {
  const { p1Flipped } = useConfigContext();
  const { numberOfPlayers, players } = usePlayerContext();

  const lifeCounters = React.useMemo(() => {
    const counters = [];
    for (let idx = 0; idx < numberOfPlayers; idx++) {
      let order;
      if (numberOfPlayers > 2 || (numberOfPlayers === 2 && idx === 0)) {
        order = idx + 1;
      } else {
        order = 3;
      }

      counters.push(
        <LifeCounter
          flipped={idx === 0 && p1Flipped}
          idx={idx}
          key={idx}
          lifeTotal={players[idx].life}
          order={order}
        />
      );
    }

    return counters;
  }, [numberOfPlayers, p1Flipped, players]);

  return (
    <StyledPlayers>
      {lifeCounters}
      <QuickConfig order={numberOfPlayers > 2 ? numberOfPlayers + 1 : 2} />
    </StyledPlayers>
  );
};
