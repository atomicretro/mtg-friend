import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

const StyledSmallCrementButton = styled(ButtonReset)`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 50%;
`;

interface ISmallCrementButtonProps {
  type: 'decrement' | 'increment';
  onClick: () => void;
}

export function SmallCrementButton(props: ISmallCrementButtonProps) {
  const { onClick, type } = props;
  const buttonText = React.useMemo(() => type === 'decrement' ? '-1' : '+1', [type]);

  return (
    <StyledSmallCrementButton className={type} onPointerDown={onClick} type='button'>
      {buttonText}
    </StyledSmallCrementButton>
  )
};
