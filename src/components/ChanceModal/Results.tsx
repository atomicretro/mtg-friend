import * as React from 'react';
import styled from 'styled-components';

import { useChanceContext } from 'src/providers/ChanceProvider';

import { RolledObject } from './RolledObject';

import { rolledObjectImageMap } from './rolledObjectImageMap';

import { EChanceOptions, TRolledObject } from 'src/types/IChance';

const StyledResults = styled.div<{ objectType: EChanceOptions }>`
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
      height: 40px; // 1/2 the height of the final rolled object
      width: 40px; // 1/2 the height of the final rolled object
      background-image: url(${({ objectType }) => rolledObjectImageMap[objectType]});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      margin: 10px 20px;
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
  results: TRolledObject[];
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

  return (
    <StyledResults objectType={whichChanceOption}>
      <div className='results'>
        {
          rolling
            ? range(numToRoll).map((el: number) => <div className='rolling' key={el} />)
            : results.map((value: TRolledObject, idx: number) => (
                <RolledObject key={idx} value={value} />
              ))
        }
      </div>
    </StyledResults>
  );
};
