import * as React from 'react';
import styled from 'styled-components';

import { ButtonReset } from './ButtonReset';

const StyledLifeCounter = styled(ButtonReset)`
  height: 100%;
  width: 20%;
`;

export function LifeCounter() {
  return (
    <StyledLifeCounter>
lll
    </StyledLifeCounter>
  )
};

export const IncrementLife = styled(LifeCounter)`
  background: green;
`;

export const DecrementLife = styled(LifeCounter)`
  background: red;
`;
