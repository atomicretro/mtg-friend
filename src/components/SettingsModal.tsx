import * as React from 'react';
import styled from 'styled-components';

import { useConfigContext } from '../providers/ConfigProvider';

import { Modal } from './Modal';
import { CloseButton } from './Buttons/CloseButton';
import { CheckBox } from './CheckBox';

const StyledSettingsModal = styled(Modal)`
  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 0 5px;

    label {
      font-size: 18px;
      user-select: none;
    }
  }
`;

export function SettingsModal() {
  const {
    closeSettingsModal,
    p1Flipped,
    toggleP1Flipped,
  } = useConfigContext();

  return (
    <StyledSettingsModal>
      <CloseButton onClick={closeSettingsModal} />
      <h2>Settings</h2>

      <div className='group'>
        <CheckBox checked={p1Flipped} id='p1_orientation' onChange={toggleP1Flipped} />
        <label htmlFor='p1_orientation'>Flip Player 1's counter orientation (for 1v1)</label>
      </div>
    </StyledSettingsModal>
  );
};
