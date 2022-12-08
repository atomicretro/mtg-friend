import * as React from 'react';
import styled from 'styled-components';

import { RollType } from './Roll';
import { RolledObject } from './RolledObject';
import { IChanceOptions } from './Options';

const StyledResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .rolled {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

interface IResultsProps {
  results: any[];
  whichOption: IChanceOptions;
}

export function Results(props: IResultsProps) {
  const { results, whichOption } = props;

  const renderResult = (value: number, idx: number) => {
    if (whichOption === IChanceOptions.COIN) {
      const coinValue = value === 1 ? 'Heads' : 'Tails';
      return <RolledObject key={idx} rollType={RollType.COIN} value={coinValue} />;
    } else {
      return <RolledObject key={idx} rollType={RollType.DIE} value={value} />;
    }
  };

  return (
    <StyledResults>
      <div className='rolled'>
        {results.map(renderResult)}
      </div>
    </StyledResults>
  );
};
