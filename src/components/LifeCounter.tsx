import * as React from 'react';
import styled from 'styled-components';

import { LifeButton } from './Buttons/LifeButton';

const StyledLifeCounter = styled.li`
  height: 33%;
  display: flex;
  font-family: 'Noto Sans Mono', monospace;
  user-select: none;

  .window {
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 6px solid #000000;
    border-radius: 24px;
    margin: 36px 10px;
  }

  .life {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
    font-size: 60px;
  } 
`;

export function LifeCounter() {
  const [life, setLife] = React.useState(20);

  return (
    <StyledLifeCounter>
      <div className='window'>
        <LifeButton onClick={() => setLife((prevLife) => prevLife - 1)} type='decrement' />
        <div className='life'>{life}</div>
        <LifeButton onClick={() => setLife((prevLife) => prevLife + 1)} type='increment' />
      </div>
    </StyledLifeCounter>
  );
};
