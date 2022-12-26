import * as React from 'react';
import styled from 'styled-components';

import { useChanceContext } from 'src/providers/ChanceProvider';

import { ChanceOptionsButton } from 'src/components/Buttons/ChanceOptionsButton';

import { IChanceOptions } from 'src/types/IChance';

const StyledOptions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #000000;
`;

export function Options() {
  const { setWhichChanceOption, whichChanceOption } = useChanceContext();
  return (
    <StyledOptions>
      {
        Object.values(IChanceOptions).map((val) => (
          <ChanceOptionsButton
            key={val}
            onClick={() => setWhichChanceOption(val)}
            selected={whichChanceOption === val}
          >
            {val}
          </ChanceOptionsButton>
        ))
      }
    </StyledOptions>
  );
};
