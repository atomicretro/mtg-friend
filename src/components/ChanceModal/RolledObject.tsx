import * as React from 'react';
import styled from 'styled-components';

import { useChanceContext } from 'src/providers/ChanceProvider';

import { rolledObjectImageMap } from './rolledObjectImageMap';

import { IChanceOptions } from 'src/types/IChance';

const StyledRolledObject = styled.div<{ objectType: IChanceOptions }>`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ objectType }) => rolledObjectImageMap[objectType]});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  stroke-width: 5px;
`;

interface IRolledObjectProps {
  value: number | 'Heads' | 'Tails';
}

export function RolledObject(props: IRolledObjectProps) {
  const { whichChanceOption } = useChanceContext();
  const { value } = props;

  return (
    <StyledRolledObject objectType={whichChanceOption}>
      {value}
    </StyledRolledObject>
  );
};
