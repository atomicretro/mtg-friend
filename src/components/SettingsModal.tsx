import * as React from 'react';
import styled from 'styled-components';

import { useConfigContext } from 'src/providers/ConfigProvider';
import { usePlayerContext } from 'src/providers/PlayerProvider';
import { useModalContext } from 'src/providers/ModalProvider';

import { ModalTopCloseButton } from 'src/components/Buttons/ModalTopCloseButton';
import { CrementButton } from './Buttons/CrementButton';

import { Modal } from './Modal';
import { CheckBox } from './CheckBox';

const StyledSettingsModal = styled(Modal)`
  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 0 5px 20px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .stacked {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-size: 18px;
        user-select: none;
      }
    }

    label, span {
      font-size: 18px;
      user-select: none;
    }
  }
`;

// SVGs from https://www.svgrepo.com/
// Loading coin animtion from https://loading.io/css/

export function SettingsModal() {
  const {
    p1Flipped,
    toggleP1Flipped,
  } = useConfigContext();
  const { addPlayer, numberOfPlayers, removePlayer } = usePlayerContext();
  const { closeModal } = useModalContext();

  return (
    <StyledSettingsModal>
      <ModalTopCloseButton onClick={closeModal} />
      <h2>Settings</h2>

      <div className='group'>
        <CrementButton onClick={removePlayer} size='large' type='decrement' />
        <div className='stacked'>
          <span>{numberOfPlayers}</span>
          <span>players</span>
        </div>
        <CrementButton onClick={addPlayer} size='large' type='increment' />
      </div>

      <div className='group'>
        <CheckBox checked={p1Flipped} id='p1_orientation' onChange={toggleP1Flipped} />
        <label htmlFor='p1_orientation'>Flip Player 1's counter orientation (for 1v1)</label>
      </div>
    </StyledSettingsModal>
  );
};
