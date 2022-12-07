import * as React from 'react';
import styled from 'styled-components';

import { ModalTypes, useModalContext } from '../providers/ModalProvider';
import { PlayerProvider } from '../providers/PlayerProvider';

import { Players } from './Players';
import { SettingsModal } from './SettingsModal';
import { LookupModal } from './LookupModal';

const StyledMain = styled.main`
  position: relative;
  height: 100vh;
`;

export function Main() {
  const { whichModal } = useModalContext();

  const maybeRenderModal = () => {
    switch (whichModal) {
      case ModalTypes.LOOKUP:
        return <LookupModal />;
      case ModalTypes.SETTINGS:
        return <SettingsModal />;
      case ModalTypes.NONE:
        return null;
    }
  };

  return (
    <StyledMain>
      { maybeRenderModal() }

      <PlayerProvider>
        <Players />
      </PlayerProvider>
    </StyledMain>
  );
};
