import * as React from 'react';
import styled from 'styled-components';

import { useModalContext } from 'src/providers/ModalProvider';

import { ModalTopCloseButton } from 'src/components/Buttons/ModalTopCloseButton';

const StyledSmallModal = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-family: 'Alexandria', sans-serif;
  background: rgba(211,211,211, 0.7);
  z-index: 2;

  .small-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40%;
    width: 80%;
    background: #ffffff;

    h2 {
      font-size: 40px;
      margin: 0 0 20px 0;
    }
  }
`;

interface ISmallModalProps {
  children: React.ReactNode;
}

export function SmallModal(props: ISmallModalProps) {
  const { closeModal } = useModalContext();
  const { children } = props;

  return (
    <StyledSmallModal onPointerDown={closeModal}>
      <div className='small-modal'>
        <ModalTopCloseButton onClick={closeModal} />
        {children}
      </div>
    </StyledSmallModal>
  )
};
