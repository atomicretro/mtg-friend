import * as React from 'react';
import styled from 'styled-components';

import { useConfigContext } from '../providers/ConfigProvider';
import { PlayerProvider } from '../providers/PlayerProvider';

import { Players } from './Players';
import { SettingsModal } from './SettingsModal';
import { LookupModal } from './LookupModal';

const StyledMain = styled.main`
  position: relative;
  height: 100vh;
`;

export function Main() {
  const { isLookupModalOpen, isSettingsModalOpen } = useConfigContext();

  return (
    <StyledMain>
      { isSettingsModalOpen && <SettingsModal /> }
      { isLookupModalOpen && <LookupModal /> }
      <PlayerProvider>
        <Players />
      </PlayerProvider>
    </StyledMain>
  );
};
