import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

const StyledRollButton = styled(ButtonReset)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 8px;
  margin: 0 0 20px 0;
  padding: 12px 0;
`;

interface IRollButtonProps {
  children: React.ReactElement;
  onClick: () => void;
}

export function RollButton(props: IRollButtonProps) {
  const { children, onClick } = props;

  return (
    <StyledRollButton onPointerDown={onClick} type='button'>
      {children}
    </StyledRollButton>
  )
};
