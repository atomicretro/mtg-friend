import * as React from 'react';
import styled from 'styled-components';

import { useModalContext } from '../providers/ModalProvider';

import { Modal } from './Modal';
import { CloseButton } from './Buttons/CloseButton';

const StyledLookupModal = styled(Modal)`
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

export function LookupModal() {
    const { closeModal } = useModalContext();

  return (
    <StyledLookupModal>
      <CloseButton onClick={closeModal} />
      <h2>MTG Glossary</h2>

    </StyledLookupModal>
  );
};
