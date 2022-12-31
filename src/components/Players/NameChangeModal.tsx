import * as React from 'react';
import styled from 'styled-components';

import { SmallModal } from 'src/components/SmallModal';

const StyledNameChangeModal = styled.div`

`;

export function NameChangeModal() {
  return (
    <SmallModal>
      <StyledNameChangeModal>
        Name Change
      </StyledNameChangeModal>
    </SmallModal>
  )
};
