import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

const StyledChanceOptionsButton = styled(ButtonReset)<{ selected: boolean }>`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-weight: 600;
  text-decoration: ${({ selected }) => selected ? 'underline' : 'none'};
  border-bottom: 2px solid #000000;

  &:last-of-type {
    border-bottom: none;
  }
`;

interface IChanceOptionsButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  selected: boolean;
}

export function ChanceOptionsButton(props: IChanceOptionsButtonProps) {
  const { children, onClick, selected } = props;

  return (
    <StyledChanceOptionsButton onPointerDown={onClick} selected={selected} type='button'>
      {children}
    </StyledChanceOptionsButton>
  )
};
