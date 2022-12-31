import * as React from 'react';
import styled from 'styled-components';

import { ChanceProvider } from 'src/providers/ChanceProvider';
import { ModalTypes, useModalContext } from 'src/providers/ModalProvider';

import { Players } from './Players';
import { SettingsModal } from './SettingsModal';
import { LookupModal } from './LookupModal';
import { NameChangeModal } from './Players/NameChangeModal';

const StyledMain = styled.main`
  box-sizing: border-box;
  position: relative;
  height: 100vh;
  padding: 10px;
`;

export function Main() {
  const { whichModal } = useModalContext();

  const maybeRenderModal = () => {
    switch (whichModal) {
      case ModalTypes.CHANCE:
        return <ChanceProvider />;
      case ModalTypes.LOOKUP:
        return <LookupModal />;
      case ModalTypes.SETTINGS:
        return <SettingsModal />;
      case ModalTypes.NAME_CHANGE:
        return <NameChangeModal />;
      case ModalTypes.NONE:
      default:
        return null;
    }
  };

  return (
    <StyledMain>
      { maybeRenderModal() }
      <Players />
    </StyledMain>
  );
};
