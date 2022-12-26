import * as React from 'react';
import styled from 'styled-components';

import { useModalContext } from 'src/providers/ModalProvider';

import { Modal } from 'src/components/Modal';
import { ModalTopCloseButton } from 'src/components/Buttons/ModalTopCloseButton';

import { Options } from './Options';
import { Roll } from './Roll';

const StyledChanceModal = styled(Modal)`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

export function ChanceModal() {
  const { closeModal } = useModalContext();

  return (
    <StyledChanceModal>
      <ModalTopCloseButton onClick={closeModal} />

      <Options />
      <Roll />
    </StyledChanceModal>
  );
};
