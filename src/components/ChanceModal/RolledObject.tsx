import * as React from 'react';
import styled from 'styled-components';

import { RollType } from './Roll';

const StyledRolledObject = styled.div<{ rollType: RollType }>`
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
  border-radius: ${({ rollType }) => rollType === RollType.COIN ? '50%' : '8px'};
`;

interface IRolledObjectProps {
  rollType: RollType;
  value: number | 'Heads' | 'Tails';
}

export function RolledObject(props: IRolledObjectProps) {
  const { rollType, value } = props;


  return (
    <StyledRolledObject rollType={rollType}>
      {value}
    </StyledRolledObject>
  );
};
