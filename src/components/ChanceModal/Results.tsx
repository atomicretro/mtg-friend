import * as React from 'react';
import styled from 'styled-components';

import { useChanceContext } from 'src/providers/ChanceProvider';

import { RolledObject } from './RolledObject';

import { rolledObjectImageMap } from './rolledObjectImageMap';

import { IChanceOptions } from 'src/types/IChance';

const StyledResults = styled.div<{ objectType: IChanceOptions }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  @keyframes loading {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .results {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    & > .rolling {
      display: inline-block;
      width: 100px;
      height: 100px;
      background-image: url(${({ objectType }) => rolledObjectImageMap[objectType]});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
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
  numToRoll: number;
  results: (number | 'Heads' | 'Tails')[];
  rolling: boolean;
}

function range(size: number): ReadonlyArray<number> {
  const array = [];
  for (let idx = 0; idx < size; idx++) {
    array.push(idx);
  }
  return array;
}

export function Results(props: IResultsProps) {
  const { whichChanceOption } = useChanceContext();
  const { numToRoll, results, rolling } = props;
  console.log('results', results);

  return (
    <StyledResults objectType={whichChanceOption}>
      <div className='results'>
        {
          rolling
            ? range(numToRoll).map((el: number) => <div className='rolling' key={el} />)
            : results.map((value: number | 'Heads' | 'Tails', idx: number) => (
                <RolledObject key={idx} value={value} />
              ))
        }
      </div>
    </StyledResults>
  );
};
