import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

import { ReactComponent as CloseIcon } from '../../images/close.svg';

const StyledCloseButton = styled(ButtonReset)`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
`;

interface ICloseButtonProps {
  onClick: () => void;
}

export function CloseButton(props: ICloseButtonProps) {
  const { onClick } = props;

  return (
    <StyledCloseButton onPointerDown={onClick} type='button'>
      <CloseIcon />
    </StyledCloseButton>
  )
};
