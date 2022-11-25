import * as React from 'react';
import styled from 'styled-components';

import { LifeCounter } from './LifeCounter';

const StyledMain = styled.main`
  height: 100vh;

  .counters {
    height: 100%;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export function Main() {
  return (
    <StyledMain>
      <ul className='counters'>
        <LifeCounter />
        <LifeCounter />
        <LifeCounter />
      </ul>
    </StyledMain>
  );
};
