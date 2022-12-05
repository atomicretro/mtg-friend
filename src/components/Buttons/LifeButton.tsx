import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

const StyledLifeButton = styled(ButtonReset)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  font-size: 30px;

  &.increment {
    background: #e6f2e6;
    border-left: 2px solid #80c080;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  &.decrement {
    background: #ffcccc;
    border-right: 2px solid #ff8080;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`;

interface ILifeButtonProps {
  type: 'decrement' | 'increment';
  onClick: () => void;
}

export function LifeButton(props: ILifeButtonProps) {
  const { onClick, type } = props;
  const buttonText = React.useMemo(() => type === 'decrement' ? '-1' : '+1', [type]);

  return (
    <StyledLifeButton className={type} onPointerDown={onClick} type='button'>
      {buttonText}
    </StyledLifeButton>
  )
};
