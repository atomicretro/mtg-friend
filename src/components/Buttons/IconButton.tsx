import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

const StyledIconButton = styled(ButtonReset)`
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 50%;

  &:focus {
    // background: green;
  }

  svg {
    height: 50%;
    width: 50%;
  }
`;

interface IIconButtonProps {
  children: React.ReactElement;
  className: string;
  onClick: () => void;
}

export function IconButton(props: IIconButtonProps) {
  const { children, className, onClick } = props;

  return (
    <StyledIconButton className={`icon-button ${className}`} onPointerDown={onClick} type='button'>
      {children}
    </StyledIconButton>
  )
};
