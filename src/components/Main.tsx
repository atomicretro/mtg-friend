import * as React from 'react';
import styled from 'styled-components';

import { PlayerProvider } from '../providers/PlayerProvider';

import { Players } from './Players';

const StyledMain = styled.main`
  height: 100vh;
`;

export function Main() {
  return (
    <StyledMain>
      <PlayerProvider>
        <Players />
      </PlayerProvider>
    </StyledMain>
  );
};
