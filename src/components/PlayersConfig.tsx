import * as React from 'react';
import styled from 'styled-components';

import { usePlayerContext } from '../providers/PlayerProvider';

const StyledPlayersConfig = styled.ul<{ order: number }>`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  order: ${({ order }) => order};
  user-select: none;
`;

interface IPlayersConfigProps {
  order: number;
}

export function PlayersConfig(props: IPlayersConfigProps) {
  const { order } = props;
  const { resetAllLifeTotals } = usePlayerContext();

  return (
    <StyledPlayersConfig order={order}>
      <button onClick={resetAllLifeTotals} type='button'>reset</button>
    </StyledPlayersConfig>
  );
};
