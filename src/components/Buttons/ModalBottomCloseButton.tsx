import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

import { ReactComponent as CloseIcon } from '../../images/close.svg';

const StyledModalBottomCloseButton = styled(ButtonReset)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 50%;

  svg {
    height: 20px;
    width: 20px;
  }
`;

interface IModalBottomCloseButtonProps {
  onClick: () => void;
}

export function ModalBottomCloseButton(props: IModalBottomCloseButtonProps) {
  const { onClick } = props;

  return (
    <StyledModalBottomCloseButton onPointerDown={onClick} type='button'>
      <CloseIcon />
    </StyledModalBottomCloseButton>
  )
};
