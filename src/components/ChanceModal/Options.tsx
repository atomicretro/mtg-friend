import * as React from 'react';
import styled from 'styled-components';

import { ChanceOptionsButton } from '../Buttons/ChanceOptionsButton';

const StyledOptions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #000000;
`;

export enum IChanceOptions {
  COIN = 'coin',
  D4 = 'd4',
  D6 = 'd6',
  D8 = 'd8',
  D10 = 'd10',
  D12 = 'd12',
  D20 = 'd20',
}

interface IOptionsProps {
  whichOption: IChanceOptions;
  setWhichOption: (option: IChanceOptions) => void;
}

export function Options(props: IOptionsProps) {
  const { setWhichOption, whichOption } = props;
  return (
    <StyledOptions>
      <ChanceOptionsButton
        onClick={() => setWhichOption(IChanceOptions.COIN)}
        selected={whichOption === IChanceOptions.COIN}
      >
          coin
      </ChanceOptionsButton>
      <ChanceOptionsButton
        onClick={() => setWhichOption(IChanceOptions.D4)}
        selected={whichOption === IChanceOptions.D4}
      >
          d4
      </ChanceOptionsButton>
      <ChanceOptionsButton
        onClick={() => setWhichOption(IChanceOptions.D6)}
        selected={whichOption === IChanceOptions.D6}
      >
          d6
      </ChanceOptionsButton>
      <ChanceOptionsButton
        onClick={() => setWhichOption(IChanceOptions.D8)}
        selected={whichOption === IChanceOptions.D8}
      >
          d8
      </ChanceOptionsButton>
      <ChanceOptionsButton
        onClick={() => setWhichOption(IChanceOptions.D10)}
        selected={whichOption === IChanceOptions.D10}
      >
          d10
      </ChanceOptionsButton>
      <ChanceOptionsButton
        onClick={() => setWhichOption(IChanceOptions.D12)}
        selected={whichOption === IChanceOptions.D12}
      >
          d12
      </ChanceOptionsButton>
      <ChanceOptionsButton
        onClick={() => setWhichOption(IChanceOptions.D20)}
        selected={whichOption === IChanceOptions.D20}
      >
          d20
      </ChanceOptionsButton>
    </StyledOptions>
  );
};
