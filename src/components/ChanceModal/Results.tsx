import * as React from 'react';
import styled from 'styled-components';

import { RollType } from './Roll';
import { RolledObject } from './RolledObject';

const StyledResults = styled.div<{ rollType: RollType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  @keyframes loading {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }


  .rolled {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    .rolling {
      display: inline-block;
      transform: translateZ(1px);
    }

    .rolling > div {
      display: inline-block;
      width: 75px;
      height: 75px;
      margin: 8px;
      border-radius: ${({ rollType }) => rollType === 'coin' ? '50%' : '8px'};
      border: 2px solid #000000;
      background: #ffffff;
      animation: rolling 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    @keyframes rolling {
      0%, 100% { animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5); }
      0% { transform: rotateY(0deg); }
      50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
      }
      100% { transform: rotateY(3600deg); }
    }
  }

  
`;

interface IResultsProps {
  results: any[];
  rolling: boolean;
  rollType: RollType;
}

export function Results(props: IResultsProps) {
  const { results, rolling, rollType } = props;
  console.log('results', results);

  const renderResult = (value: number, idx: number) => {
    if (rollType === RollType.COIN) {
      const coinValue = value === 1 ? 'Heads' : 'Tails';
      return <RolledObject key={idx} rollType={RollType.COIN} value={coinValue} />;
    } else {
      return <RolledObject key={idx} rollType={RollType.DIE} value={value} />;
    }
  };

  return (
    <StyledResults rollType={rollType}>
      <div className='rolled'>
        {
          rolling
            ? <div className='rolling'>
                <div/>
              </div>
            : results.map(renderResult)
        }
      </div>
    </StyledResults>
  );
};
