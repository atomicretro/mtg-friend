import * as React from 'react';
import styled from 'styled-components';

import { DecrementLife } from './Buttons/LifeButtons';
import { IncrementLife } from './Buttons/IncrementLife';
console.log(IncrementLife)
const StyledLifeCounter = styled.li`
  height: 33%;
  display: flex;

  .window {
    width: 100%;
    border: 6px solid #000000;
    border-radius: 24px;
    margin: 36px 10px;
  }
`;

export function LifeCounter() {
  return (
    <StyledLifeCounter>
      <div className='window'>
        <IncrementLife>
          hi
        </IncrementLife>

        <DecrementLife />
      </div>
    </StyledLifeCounter>
  );
};
