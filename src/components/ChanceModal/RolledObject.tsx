import * as React from 'react';
import styled from 'styled-components';

import { useChanceContext } from 'src/providers/ChanceProvider';

import { rolledObjectImageMap } from './rolledObjectImageMap';

import { EChanceOptions, TRolledObject } from 'src/types/IChance';

const StyledRolledObject = styled.div<{ objectType: EChanceOptions }>`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ objectType }) => rolledObjectImageMap[objectType]});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 10px 0;
`;

interface IRolledObjectProps {
  value: TRolledObject;
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
