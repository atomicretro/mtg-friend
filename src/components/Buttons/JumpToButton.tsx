import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

const StyledJumpToButton = styled(ButtonReset)`
  font-family: 'Alexandria', sans-serif;
`;

interface IJumpToButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function JumpToButton(props: IJumpToButtonProps) {
  const { children, onClick } = props;

  return (
    <StyledJumpToButton onPointerDown={onClick} type='button'>
      {children}
    </StyledJumpToButton>
  )
};
