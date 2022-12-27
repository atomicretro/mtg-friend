import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

const StyledCrementButton = styled(ButtonReset)<{ size: 'small' | 'large' }>`
  height: ${({ size }) => size === 'small' ? '50px' : '54px'};
  width: ${({ size }) => size === 'small' ? '50px' : '54px'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => size === 'small' ? '16px' : '18px'};
  font-weight: ${({ size }) => size === 'small' ? '500' : '600'};
  border: ${({ size }) => size === 'small' ? '1px' : '2px'} solid #000000;
  border-radius: 50%;
`;

interface ICrementButtonProps {
  onClick: () => void;
  size: 'small' | 'large';
  type: 'decrement' | 'increment';
}

export function CrementButton(props: ICrementButtonProps) {
  const { onClick, size, type } = props;
  const buttonText = React.useMemo(() => type === 'decrement' ? '-1' : '+1', [type]);

  return (
    <StyledCrementButton className={type} onPointerDown={onClick} size={size} type='button'>
      {buttonText}
    </StyledCrementButton>
  );
};
