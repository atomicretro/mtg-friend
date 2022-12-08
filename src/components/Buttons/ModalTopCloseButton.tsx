import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

import { ReactComponent as CloseIcon } from '../../images/close.svg';

const StyledModalTopCloseButton = styled(ButtonReset)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
`;

interface IModalTopCloseButtonProps {
  onClick: () => void;
}

export function ModalTopCloseButton(props: IModalTopCloseButtonProps) {
  const { onClick } = props;

  return (
    <StyledModalTopCloseButton onPointerDown={onClick} type='button'>
      <CloseIcon />
    </StyledModalTopCloseButton>
  )
};
