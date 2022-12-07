import * as React from 'react';
import styled from 'styled-components';

import { useConfigContext } from '../providers/ConfigProvider';
import { PlayerProvider } from '../providers/PlayerProvider';

import { Players } from './Players';
import { SettingsModal } from './SettingsModal';

const StyledMain = styled.main`
  position: relative;
  height: 100vh;
`;

export function Main() {
  const { isSettingsModalOpen } = useConfigContext();

  return (
    <StyledMain>
      { isSettingsModalOpen && <SettingsModal /> }
      <PlayerProvider>
        <Players />
      </PlayerProvider>
    </StyledMain>
  );
};
