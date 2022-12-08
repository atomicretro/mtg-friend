import * as React from 'react';
import styled from 'styled-components';

import { useModalContext } from '../../providers/ModalProvider';

import { Modal } from '../Modal';
import { IChanceOptions, Options } from './Options';
import { Roll } from './Roll';

import { ModalTopCloseButton } from '../Buttons/ModalTopCloseButton';

const StyledChanceModal = styled(Modal)`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

export function ChanceModal() {
  const { closeModal } = useModalContext();

  const [whichOption, setWhichOption] = React.useState(IChanceOptions.COIN);

  return (
    <StyledChanceModal>
      <ModalTopCloseButton onClick={closeModal} />

      <Options setWhichOption={setWhichOption} whichOption={whichOption} />
      <Roll whichOption={whichOption} />
    </StyledChanceModal>
  );
};
