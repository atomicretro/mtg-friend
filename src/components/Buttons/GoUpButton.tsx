import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

import { ReactComponent as GoUpIcon } from '../../images/up-arrow.svg';

const StyledGoUpButton = styled(ButtonReset)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
`;

interface IGoUpButtonProps {
  onClick: () => void;
}

export function GoUpButton(props: IGoUpButtonProps) {
  const { onClick } = props;

  return (
    <StyledGoUpButton onPointerDown={onClick} type='button'>
      <GoUpIcon />
    </StyledGoUpButton>
  )
};
